import {FETCH_RESULTS, FETCH_RESULTS_FAILED, FETCH_RESULTS_SUCCESS} from "./apiSearchActions";


export default function plantReducer(state, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return { ...state, fetchStatus: 'PENDING'};
    case FETCH_RESULTS_SUCCESS:
      return { ...state, fetchStatus: 'SUCCESS', results: action.payload };
    case FETCH_RESULTS_FAILED:
      return { ...state, fetchStatus: 'FAILED' };
    default:
      return state;
  }
}