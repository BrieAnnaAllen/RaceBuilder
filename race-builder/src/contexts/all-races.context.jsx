import { createContext } from "react";
import RACES from "../races-file.json";
import { useState } from "react";


export const RacesContext = createContext({
    races: []

});
    
export const RacesProvider = ({children})=> {
    const[races, setRaces] = useState(RACES);
    const value = {races};

    return <RacesContext.Provider value={value}>{children}</RacesContext.Provider>
};
