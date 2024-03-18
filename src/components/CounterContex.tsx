import React, {createContext, useContext, useState} from "react";

const CounterContext = createContext();

// create the use context helper
export const useCounterContex = () => useContext(CounterContext);


// create the provider in order to distribute state to the components
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
return (
    <CounterContext.Provider 
    value={{
        counter,
        setCounter,
    }}>
        {children}
    </CounterContext.Provider>
);
    
};






