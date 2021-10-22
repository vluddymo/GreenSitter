
import {fetchSearchQuery} from "../../utils/api-Utils";

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';
export const FETCH_RESULTS_FAILED = 'FETCH_RESULTS_FAILED';

export async function fetchSearchResults(dispatch, image) {
  dispatch({ type: FETCH_RESULTS})
  try {
    const results = await fetchSearchQuery(image);
    dispatch({ type: FETCH_RESULTS_SUCCESS, payload: results });
  } catch (error) {
    dispatch({ type: FETCH_RESULTS_FAILED, payload: error });
  }
}
