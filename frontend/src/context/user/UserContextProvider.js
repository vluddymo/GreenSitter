import React, {useReducer} from "react";
import { UserDispatchContext, UserStateContext } from './UserContext';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
const initialState = {
  authStatus: 'PENDING',
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, authStatus: 'PENDING' };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authStatus: 'SUCCESS',
        userData: action.payload,
      };
    case LOGIN_FAILED:
      return { ...state, authStatus: 'FAILED' };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
  );
}

export default UserContextProvider;