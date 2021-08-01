import {
  SET_COVID_DATA,
  SET_CURRENT_INDEX,
  SET_CURRENT_UNIT
} from '../actions/types';

const initialState = {
  covidData: [],
  currentIndex: 'cases',
  currentUnit: 'absolute'
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVID_DATA:
      return { ...state, covidData: action.payload };
    case SET_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload };
    case SET_CURRENT_UNIT:
      return { ...state, currentUnit: action.payload };
    default:
      return state;
  }
};
