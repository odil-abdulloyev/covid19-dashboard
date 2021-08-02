import { Bar, Chart as ChartJS } from 'react-chartjs-2';

ChartJS.defaults.color = getComputedStyle(
  document.documentElement
).getPropertyValue('--text-color-light');
ChartJS.defaults.borderColor = '#b3dee210';

export const Chart = () => {
  return (
    <div className='block chart'>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Green'],
          datasets: [
            {
              label: '# of Votes',
              data: [20, 30, 50],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
            }
          ]
        }}
      />
    </div>
  );
};
