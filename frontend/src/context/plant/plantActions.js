
import {fetchAllPlants, putAPlant} from "../../utils/plantsUtils";

export const FETCH_PLANTS = 'FETCH_PLANTS';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILED = 'FETCH_PLANTS_FAILED';

export const ADD_PLANTS = 'ADD_PLANTS';
export const ADD_PLANTS_SUCCESS = 'ADD_PLANTS_SUCCESS';
export const ADD_PLANTS_FAILED = 'ADD_PLANTS_FAILED';

export async function fetchPlants(dispatch) {
  dispatch({ type: FETCH_PLANTS });
  try {
    const plants = await fetchAllPlants();
    dispatch({ type: FETCH_PLANTS_SUCCESS, payload: plants });
  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILED, payload: error });
  }
}

export async function addPlant(dispatch, plantName) {
  dispatch({ type: ADD_PLANTS });
  try {
    const plant = await putAPlant(plantName);
    dispatch({ type: ADD_PLANTS_SUCCESS, payload: plant });
  } catch (error) {
    dispatch({ type: ADD_PLANTS_FAILED, payload: error });
  }
}
