export const config = {
  apiUrl: 'https://corona.lmao.ninja/v2/countries',
  mapTileLayerUrl:
    'https://api.mapbox.com/styles/v1/abdulloh76/ckiuab9eh2phd19qk49l16mvl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJkdWxsb2g3NiIsImEiOiJja2l1YTV6Z3EwOWdhMnpuenE3N3gxOHhjIn0.txVoKFibwsl1bMD2ylfxOA',
  // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
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
