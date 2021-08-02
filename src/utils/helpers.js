import { config } from '../config';

const calculateTotal = (covidData, index) =>
  covidData.reduce((total, data) => total + data[index], 0);

export const getCovidStats = ({
  covidData,
  countryData,
  index,
  period,
  unit
}) => {
  const todayIndex = `today${index[0].toUpperCase() + index.slice(1)}`;
  let result = 0;
  if (period === config.period.total) {
    result = countryData?.[index] || calculateTotal(covidData, index);
  } else if (period === config.period.today) {
    result = countryData?.[todayIndex] || calculateTotal(covidData, todayIndex);
  } else {
    throw new TypeError('Invalid period');
  }
  if (unit === config.unit.per100k) {
    result = Math.round(
      (result /
        (countryData?.population || calculateTotal(covidData, 'population'))) *
        100000
    );
  }
  return result;
};
