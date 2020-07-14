import {FETCH_PLANTS, FETCH_PLANTS_FAILED, FETCH_PLANTS_SUCCESS} from "./plantActions";

export default function plantReducer(state, action) {
  switch (action.type) {
    case FETCH_PLANTS:
      return { ...state, fetchStatus: 'PENDING' };
    case FETCH_PLANTS_SUCCESS:
      return { ...state, fetchStatus: 'SUCCESS', plants: action.payload };
    case FETCH_PLANTS_FAILED:
      return { ...state, fetchStatus: 'FAILED' };
    default:
      return state;
  }
}