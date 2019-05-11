import {FETCH_SCHEDULE} from '../actions/types';

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return action.series;
    default:
      return state;
  }
}