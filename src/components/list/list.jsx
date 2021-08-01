import { useSelector } from 'react-redux';
import { ControlPanel } from '../control-panel/control-panel';
import './list.css';

export const List = () => {
  const covidData = useSelector(state => state.covidData);
  const currentIndex = useSelector(state => state.currentIndex);
  return (
    <div className='block list'>
      <ControlPanel target='index' values={['cases', 'deaths', 'recovered']} />
      <ul>
        {covidData.map(({country, countryInfo, ...data}) => (
          <li className='list-item' key={country + countryInfo._id}>
              <div className='country'>
                <img
                  src={countryInfo.flag}
                  alt={countryInfo.iso3}
                  className='country-flag'
                />
                <span className='country-name'>{country}</span>
              </div>
              <div className='amount'>{data[currentIndex]}</div>
            </li>
        ))}
      </ul>
    </div>
  );
};
