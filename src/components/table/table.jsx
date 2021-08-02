import { useSelector } from 'react-redux';
import './table.css';
import { ControlPanel } from '../control-panel/control-panel';
import { config } from '../../config';

export const Table = () => {
  const covidData = useSelector((state) => state.covidData);
  const currentCountry = useSelector((state) => state.currentCountry);
  const period = useSelector((state) => state.currentPeriod);
  const unit = useSelector((state) => state.currentUnit);
  const country = covidData.find((data) => data.country === currentCountry);

  const calculateTotal = (index) =>
    covidData.reduce((total, data) => total + data[index], 0);

  const getCovidInfo = (index) => {
    const todayIndex = `today${index[0].toUpperCase() + index.slice(1)}`;
    let result = 0;
    if (period === config.period.total) {
      result = country?.[index] || calculateTotal(index);
    } else if (period === config.period.today) {
      result = country?.[todayIndex] || calculateTotal(todayIndex);
    } else {
      throw new TypeError('Invalid period');
    }
    if (unit === config.unit.per100k) {
      result = Math.round(
        (result / (country?.population || calculateTotal('population'))) *
          100000
      );
    }
    return result;
  };

  return (
    <div className='block table'>
      <ControlPanel
        target='period'
        values={[config.period.total, config.period.today]}
      />
      <table>
        <thead>
          <tr>
            <th colSpan='2'>{currentCountry ?? 'Global'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cases</td>
            <td>{getCovidInfo('cases')}</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td className='deaths'>{getCovidInfo('deaths')}</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td className='recovered'>{getCovidInfo('recovered')}</td>
          </tr>
        </tbody>
      </table>
      <ControlPanel
        target='unit'
        values={[config.unit.absolute, config.unit.per100k]}
      />
    </div>
  );
};
