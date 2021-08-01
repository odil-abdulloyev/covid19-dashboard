import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

export const Map = () => {
  // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
  return (
    <div className='block map'>
      <MapContainer
        className='map-container'
        center={[0, 0]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://api.mapbox.com/styles/v1/abdulloh76/ckiuab9eh2phd19qk49l16mvl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJkdWxsb2g3NiIsImEiOiJja2l1YTV6Z3EwOWdhMnpuenE3N3gxOHhjIn0.txVoKFibwsl1bMD2ylfxOA'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
