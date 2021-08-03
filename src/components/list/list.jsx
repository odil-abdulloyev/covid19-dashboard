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
  const unit = useSelector((state) => state.currentUnit);
  const period = useSelector((state) => state.currentPeriod);
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);

  const handleItemClick = (countryObj) => {
    dispatch(setCurrentCountry(countryObj));
    setActive(countryObj.country);
  };

  return (
    <div className='block list'>
      <ControlPanel
        target={config.target.index}
        values={[
          config.index.cases,
          config.index.deaths,
          config.index.recovered
        ]}
      />
      <ul>
        {covidData.map((countryObj) => (
          <li
            onClick={() => handleItemClick(countryObj)}
            className={`list-item ${active === countryObj.country && 'active'}`}
            key={countryObj.country + countryObj.countryInfo._id}
          >
            <div className='country'>
              <img
                src={countryObj.countryInfo.flag}
                alt={countryObj.countryInfo.iso3}
                className='country-flag'
              />
              <span className='country-name'>{countryObj.country}</span>
            </div>
            <div className={`amount ${index}`}>
              {getCovidStats({
                covidData,
                countryData: countryObj,
                index,
                unit,
                period
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
