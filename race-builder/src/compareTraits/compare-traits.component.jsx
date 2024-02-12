import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";



const CompareTraits = () => {
    const {customRace, race1, race2, balance, updateBalance} = useContext(CustomContext);
    console.log(customRace);

    const traitBalanceCalculator = () => {
       const traitsT =  Object.keys(race1.traits);
       const test  = traitsT.map((trait) => {
        //updateBalance(parseFloat(race1.traits[trait].bal));
       });
    }

    traitBalanceCalculator();


    return(
        <div>
            <h1>Half {race1.name}, half {race2.name}</h1>
            <h2>Ability Score Increase</h2>
            <p>{customRace["ability score"].desc}</p>
            <h2>Age</h2>
            <p>{customRace.age.desc}</p>
            <h2>Size</h2>
            <p>{customRace.size.desc}</p>
            <h2>Speed</h2>
            <p>{customRace.speed.desc}</p>
            <h2>Languages</h2>
            <p>{customRace.languages.desc}</p>
            <h1>Balance Score</h1>
            <p>{balance}</p>
        </div>
        
       
    )

}

export default CompareTraits;