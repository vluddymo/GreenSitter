
import {fetchAllPlants, putAPlant, removeAPlant} from "../../utils/plantsUtils";

export const FETCH_PLANTS = 'FETCH_PLANTS';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILED = 'FETCH_PLANTS_FAILED';

export const ADD_PLANT = 'ADD_PLANT';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAILED = 'ADD_PLANT_FAILED';

export const DELETE_PLANT = 'DELETE_PLANT';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const DELETE_PLANT_FAILED = 'DELETE_PLANT_FAILED';

export async function fetchPlants(dispatch) {
  dispatch({ type: FETCH_PLANTS });
  try {
    const plants = await fetchAllPlants();
    dispatch({ type: FETCH_PLANTS_SUCCESS, payload: plants });
  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILED, payload: error });
  }
}

export async function addPlant(dispatch, choiceData) {
  dispatch({ type: ADD_PLANT });
  try {
    const plant = await putAPlant(choiceData);
    dispatch({ type: ADD_PLANT_SUCCESS, payload: plant });
  } catch (error) {
    dispatch({ type: ADD_PLANT_FAILED, payload: error });
  }
}

export async function removePlant(dispatch, nickName) {
  dispatch({ type: DELETE_PLANT });
  try {
    await removeAPlant(nickName);
    dispatch({ type: DELETE_PLANT_SUCCESS, payload: nickName });
  } catch (error) {
    dispatch({ type: DELETE_PLANT_FAILED });
  }
}


