import {FETCH_RESULTS, FETCH_RESULTS_FAILED, FETCH_RESULTS_SUCCESS} from "./apiSearchActions";


export default function plantReducer(state, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return { ...state, fetchResultsStatus: 'PENDING'};
    case FETCH_RESULTS_SUCCESS:
      return { ...state, fetchResultsStatus: 'SUCCESS', results: action.payload };
    case FETCH_RESULTS_FAILED:
      return { ...state, fetchResultsStatus: 'FAILED' };
    default:
      return state;
  }
}