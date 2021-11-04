import {PlantDispatchContext, PlantStateContext} from "./PlantContext";
import React, {useReducer} from "react";
import plantReducer from "./plantReducer";


export default function PlantContextProvider({children}) {

    const [state, dispatch] = useReducer(plantReducer, {
        plants: [],
        fetchStatus: undefined,
    });

    return (
        <PlantStateContext.Provider value={state}>
            <PlantDispatchContext.Provider value={dispatch}>
                {children}
            </PlantDispatchContext.Provider>
        </PlantStateContext.Provider>
    )


}