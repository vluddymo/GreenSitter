import {
  ADD_PLANT,
  ADD_PLANT_FAILED,
  ADD_PLANT_SUCCESS,
  FETCH_PLANTS,
  FETCH_PLANTS_FAILED,
  FETCH_PLANTS_SUCCESS
} from "./plantActions";

export default function plantReducer(state, action) {
  switch (action.type) {
    case FETCH_PLANTS:
      return { ...state, fetchStatus: 'PENDING' };
    case FETCH_PLANTS_SUCCESS:
      return { ...state, fetchStatus: 'SUCCESS', plants: action.payload };
    case FETCH_PLANTS_FAILED:
      return { ...state, fetchStatus: 'FAILED' };
    case ADD_PLANT:
      return { ...state, addStatus: 'PENDING' };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        addStatus: 'SUCCESS',
        plants: [...state.plants, action.payload],
      };
    case ADD_PLANT_FAILED:
      return { ...state, addStatus: 'FAILED' };
    default:
      return state;
  }
}