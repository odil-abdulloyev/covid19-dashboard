import { SET_COVID_DATA, SET_CURRENT_INDEX, SET_CURRENT_UNIT } from './types';

export const setCovidData = (data) => ({
  type: SET_COVID_DATA,
  payload: data
});

export const setCurrentIndex = (index) => ({
  type: SET_CURRENT_INDEX,
  payload: index
});

export const setCurrentUnit = (unit) => ({
  type: SET_CURRENT_UNIT,
  payload: unit
});
