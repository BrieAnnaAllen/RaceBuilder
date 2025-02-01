import { createContext, useState} from "react";

export const CustomContext = createContext({
    race1: {},
    race2: {},
    customRace: {},
    balance: 0,
    raceTraits: {},
    finished: false,
});



export const CustomProvider = ({children}) => {
    const [race1, setRace1] = useState({});
    const [race2, setRace2] = useState({});
    const [customRace, setCustomRace] = useState({});
    const [balance, setBalance] = useState(0);
    const [raceTraits, setRaceTraits] = useState({});
    const [finished, setFinished] = useState(false);

    const balanceMax = 33;

    const SetRaces = (r1, r2) => {
        console.log(r2);
        setRace1(...r1);
        setRace2(...r2);
    }

    const updateRaceTraits = (keyTrait, valTrait) => {
        
        if(keyTrait in raceTraits){
            updateBalance(-(parseFloat(raceTraits[keyTrait]["bal"])));
            delete raceTraits[keyTrait];
            
            
            
        }
        else{
            raceTraits[keyTrait] = valTrait;
            updateBalance(parseFloat(raceTraits[keyTrait]["bal"]));

        }
        console.log(raceTraits);
    }


    const addToCustomRace = (key, val) => {
        setCustomRace({
            ...customRace, 
            [key]: val});
            console.log(key);
            console.log(val);
    }

    const updateBalance = (bal) => {
        setBalance(balance + bal);
        console.log(balance);
    }

    const value = {race1, race2, customRace, SetRaces, addToCustomRace, balanceMax, balance, updateBalance, updateRaceTraits, raceTraits, setFinished, finished};

    return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}

