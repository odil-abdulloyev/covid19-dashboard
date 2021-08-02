import { config } from '../../config';
import {
  SET_COVID_DATA,
  SET_CURRENT_COUNTRY,
  SET_CURRENT_INDEX,
  SET_CURRENT_PERIOD,
  SET_CURRENT_UNIT
} from '../actions/types';

const initialState = {
  covidData: [],
  currentIndex: config.index.cases,
  currentUnit: config.unit.absolute,
  currentPeriod: config.period.total,
  currentCountry: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVID_DATA:
      return { ...state, covidData: action.payload };
    case SET_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload };
    case SET_CURRENT_UNIT:
      return { ...state, currentUnit: action.payload };
    case SET_CURRENT_COUNTRY:
      return { ...state, currentCountry: action.payload };
    case SET_CURRENT_PERIOD:
      return { ...state, currentPeriod: action.payload };
    default:
      return state;
  }
};
