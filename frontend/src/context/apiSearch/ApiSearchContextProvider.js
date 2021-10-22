import React, {useReducer} from "react";
import {ApiSearchDispatchContext, ApiSearchStateContext} from "./ApiSearchContext";
import apiSearchReducer from "./apiSearchReducer";



export default function ApiSearchContextProvider({children}) {

  const [state, dispatch] = useReducer(apiSearchReducer, {
    results: [],
    fetchResultsStatus: undefined
  });

  return (
      <ApiSearchStateContext.Provider value={state}>
        <ApiSearchDispatchContext.Provider value={dispatch}>
          {children}
        </ApiSearchDispatchContext.Provider>
      </ApiSearchStateContext.Provider>
  )


}