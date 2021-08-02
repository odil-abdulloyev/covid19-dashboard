import { useSelector } from 'react-redux';
import './table.css';
import { ControlPanel } from '../control-panel/control-panel';
import { config } from '../../config';
import { getCovidStats } from '../../utils/helpers';

export const Table = () => {
  const covidData = useSelector((state) => state.covidData);
  const currentCountry = useSelector((state) => state.currentCountry);
  const period = useSelector((state) => state.currentPeriod);
  const unit = useSelector((state) => state.currentUnit);
  const countryData = covidData.find((data) => data.country === currentCountry);

  return (
    <div className='block table'>
      <ControlPanel
        target={config.target.period}
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
            <td>
              {getCovidStats({
                covidData,
                countryData,
                unit,
                period,
                index: config.index.cases
              })}
            </td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td className='deaths'>
              {getCovidStats({
                covidData,
                countryData,
                unit,
                period,
                index: config.index.deaths
              })}
            </td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td className='recovered'>
              {getCovidStats({
                covidData,
                countryData,
                unit,
                period,
                index: config.index.recovered
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <ControlPanel
        target={config.target.unit}
        values={[config.unit.absolute, config.unit.per100k]}
      />
    </div>
  );
};
