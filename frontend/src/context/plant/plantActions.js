
import {fetchAllPlants} from "../../utils/plantsUtils";

export const FETCH_PLANTS = 'FETCH_PLANTS';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILED = 'FETCH_PLANTS_FAILED';

export async function fetchPlants(dispatch) {
  dispatch({ type: FETCH_PLANTS });
  try {
    const plants = await fetchAllPlants();
    dispatch({ type: FETCH_PLANTS_SUCCESS, payload: plants });
  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILED, payload: error });
  }
}