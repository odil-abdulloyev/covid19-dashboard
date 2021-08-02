export const config = {
  apiUrl: 'https://corona.lmao.ninja/v2/countries',
  index: {
    cases: 'cases',
    deaths: 'deaths',
    recovered: 'recovered'
  },
  unit: {
    absolute: 'absolute',
    per100k: 'per 100k population'
  },
  period: {
    total: 'total',
    today: 'today'
  },
  target: {
    index: 'index',
    unit: 'unit',
    period: 'period'
  }
};
