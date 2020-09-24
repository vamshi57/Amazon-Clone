import React,{createContext,useContext,useReducer} from 'react'
//prepare the data layer
export const StateContext=createContext();

//wrap out app
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>  
);


//pull the information from the data layer
export const useStatevalue=()=>useContext(StateContext);