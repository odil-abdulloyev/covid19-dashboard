import { Chart as ChartJS, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chart.css';
import { getCovidStats } from '../../utils/helpers';
import { config } from '../../config';

ChartJS.defaults.color = getComputedStyle(
  document.documentElement
).getPropertyValue('--text-color-light');
ChartJS.defaults.borderColor = '#b3dee210';

export const Chart = () => {
  const covidData = useSelector((state) => state.covidData);
  const currentCountry = useSelector((state) => state.currentCountry);

  return (
    <div className='block chart'>
      <div className='chart-container'>
        <Doughnut
          data={{
            labels: ['Cases', 'Deaths', 'Recovered'],
            datasets: [
              {
                data: [
                  getCovidStats({
                    covidData,
                    countryData: currentCountry,
                    index: config.index.cases,
                    period: config.period.total,
                    unit: config.unit.absolute
                  }),
                  getCovidStats({
                    covidData,
                    countryData: currentCountry,
                    index: config.index.deaths,
                    period: config.period.total,
                    unit: config.unit.absolute
                  }),
                  getCovidStats({
                    covidData,
                    countryData: currentCountry,
                    index: config.index.recovered,
                    period: config.period.total,
                    unit: config.unit.absolute
                  })
                ],
                backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                  getComputedStyle(document.documentElement).getPropertyValue(
                    '--text-color-light'
                  ),
                  getComputedStyle(document.documentElement).getPropertyValue(
                    '--text-color-danger'
                  ),
                  getComputedStyle(document.documentElement).getPropertyValue(
                    '--text-color-success'
                  )
                ],
                borderWidth: 1
              }
            ]
          }}
        />
      </div>
    </div>
  );
};
