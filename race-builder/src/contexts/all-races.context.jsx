import { createContext} from "react";
import RACES from "../races-file.json";
import { useState } from "react";


export const RacesContext = createContext({
    races: [],
    superRaces: []

});
    
export const RacesProvider = ({children})=> {
    const[races, setRaces] = useState(RACES);
    const [superRaces, setSuperRaces] = useState([]);
    const value = {races, superRaces};



    return <RacesContext.Provider value={value}>{children}</RacesContext.Provider>
};
