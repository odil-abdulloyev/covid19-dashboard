import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import { setCurrentCountry } from '../../redux/actions/actions';
import { getCovidStats } from '../../utils/helpers';
import { ControlPanel } from '../control-panel/control-panel';
import './list.css';

export const List = () => {
  const covidData = useSelector((state) => state.covidData);
  const index = useSelector((state) => state.currentIndex);
  const unit = useSelector(state => state.currentUnit);
  const period = useSelector(state => state.currentPeriod);
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);

  const handleItemClick = (country) => {
    dispatch(setCurrentCountry(country)); 
    setActive(country);
  }

  return (
    <div className='block list'>
      <ControlPanel
        target='index'
        values={[
          config.index.cases,
          config.index.deaths,
          config.index.recovered
        ]}
      />
      <ul>
        {covidData.map(({ country, countryInfo, ...data }) => (
          <li onClick={() => handleItemClick(country)} className={`list-item ${active === country && 'active'}`} key={country + countryInfo._id}>
            <div className='country'>
              <img
                src={countryInfo.flag}
                alt={countryInfo.iso3}
                className='country-flag'
              />
              <span className='country-name'>{country}</span>
            </div>
            <div className={`amount ${index}`}>{getCovidStats({covidData, countryData: data, index, unit, period})}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
