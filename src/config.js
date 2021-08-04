export const config = {
  apiUrl: 'https://corona.lmao.ninja/v2/countries',
  mapTileLayerUrl:
    'https://api.mapbox.com/styles/v1/j0hn-d03/ckrx3ina30ihn18p683g9oyn1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiajBobi1kMDMiLCJhIjoiY2tyeDJ1d2IyMDUzNjJvbXJjaTVuNjR1biJ9.zspgA8Q6Df0zjna6OS4QJg',
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
