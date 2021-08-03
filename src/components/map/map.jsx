import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useCallback } from 'react';
import './map.css';
import { config } from '../../config';
import { calculateMarkerSize } from '../../utils/helpers';
import { useState } from 'react';

export const Map = () => {
  const covidData = useSelector((state) => state.covidData);
  const mapRef = useRef(null);
  const index = useSelector((state) => state.currentIndex);
  const currentCountry = useSelector((state) => state.currentCountry);
  const [center, setCenter] = useState([0, 0]);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    const { lat = 0, long = 0 } = currentCountry?.countryInfo ?? {};
    setCenter([lat, long]);
    setZoomIn(!!currentCountry);
  }, [currentCountry]);

  const pointToLayer = useCallback(
    (feature, latlng) => {
      const { properties } = feature;
      const { country, updated, cases, deaths, recovered } = properties;
      const markerSize = calculateMarkerSize({
        covidData,
        index,
        amount: properties[index]
      });

      const html = `
      <span class='icon-marker ${index}' style="width: ${markerSize}rem; height: ${markerSize}rem;">
        <span class='icon-marker-tooltip'>
          <h5>${country}</h5>
          <ul>
            <li>
              <strong>Confirmed: </strong>
              <span class='cases'>${cases}</span>
            </li>
            <li>
              <strong>Deaths: </strong>
              <span class='deaths'>${deaths}</span>
            </li>
            <li>
              <strong>Recovered: </strong>
              <span class='recovered'>${recovered}</span>
            </li>
            <li>
              <strong>Last update: </strong>
              <span>${new Date(updated).toLocaleString()}</span>
            </li>
          </ul>
        </span>
      </span>
    `;

      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'icon',
          html
        }),
        riseOnHover: true
      });
    },
    [index, covidData]
  );

  useEffect(() => {
    const { leafletElement: map } = mapRef.current;
    const features = covidData.map((data) => {
      const { lat, long } = data.countryInfo;
      return {
        type: 'Feature',
        properties: {
          ...data
        },
        geometry: {
          type: 'Point',
          coordinates: [long, lat]
        }
      };
    });
    const geoJsonObject = { type: 'FeatureCollection', features };
    const geoJson = new L.GeoJSON(geoJsonObject, { pointToLayer }).addTo(map);

    return () => {
      geoJson.removeFrom(map);
    };
  }, [covidData, pointToLayer]);

  return (
    <div className='block map'>
      <LeafletMap
        ref={mapRef}
        className='map-container'
        center={center}
        zoom={zoomIn ? 8 : 3}
        scrollWheelZoom={true}
      >
        <TileLayer url={config.mapTileLayerUrl} />
      </LeafletMap>
    </div>
  );
};
