import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";



const CompareTraits = () => {
    const {customRace, race1, race2, balance, balanceMax, updateBalance, updateRaceTraits, raceTraits, finished, setFinished} = useContext(CustomContext);

   const Traits1 = race1.traits;
   const Traits2 = race2.traits;


   
    const traitsHandler = (raceTraitsList, raceKey) => {
     
        updateRaceTraits(raceKey, raceTraitsList[raceKey]);

        
        // addToCustomRaceHandler('speed', race.speed);
        // updateBalance(parseFloat(race.speed.bal));
    }
    
    const toggleFinished = () => {
        setFinished(!finished);

    }
   
    const displayRaceTraits = (race) => {
        const traitsT = race.traits;
        const raceKeys = Object.keys(traitsT);
        var Tr = [];
        for(let i = 0; i < raceKeys.length; i++){
            Tr.push(<button onClick={() => traitsHandler(traitsT, raceKeys[i])}><h2>{`${raceKeys[i]}`}</h2><p>{`${traitsT[raceKeys[i]].desc}`}</p></button>);
        }

        return Tr;
    }

    const finalizationHandler = () => {
        console.log(customRace);
        if(balance > balanceMax){
            alert("Max balance for Traits is set to " + balanceMax + ".  Please remove some traits to continue.");
        }
        else {
            toggleFinished();
            customRace["traits"] = raceTraits;
            console.log("Hello?");
        }
    }

  

    // const traitsHandler = (race) => {
    //     addToCustomRaceHandler('speed', race.speed);
    //     updateBalance(parseFloat(race.speed.bal));
    // }
    //Note: future update: add comparioon to see which there are duplicits of
       
//   const superKeys = Object.keys(ALL_SUPER_RACES);
//   for (let i = 0; i < superKeys.length; i++) {
//     var opt = [];
//     races.map((race) => {
//       if(superKeys[i] == race.super){
//       opt.push(<option key={race.id}>{race.name}</option>)
//     }});
//     optgr.push(<optgroup label={`${superKeys[i]}`.toUpperCase()}>{opt}</optgroup>)
//   }
//   return optgr;
    
    
    return(
        <div>
            {/* <h1>Half {race1.name}, half {race2.name}</h1>
            <h2>Ability Score Increase</h2>
            <p>{customRace["ability score"].desc}</p>
            <h2>Age</h2>
            <p>{customRace.age.desc}</p>
            <h2>Size</h2>
            <p>{customRace.size.desc}</p>
            <h2>Speed</h2>
            <p>{customRace.speed.desc}</p>
            <h2>Languages</h2>
            <p>{customRace.languages.desc}</p> */}
            <h1>Balance Score</h1>
            <p>{balance}</p>
            <h1>Race 1 Traits</h1>
            {displayRaceTraits(race1)}
            <h1>Race 2 Traits</h1>
            {displayRaceTraits(race2)}
           { finished ? (
            <div>
                <p>Are You Sure?</p>
                <button><Link to='/finished-custom-race'>Yes</Link></button>
                <button onClick={() => toggleFinished()}>No</button>
            </div>
           ) : ( <button onClick={() => finalizationHandler() }>Finalize</button> ) }
        </div>
        
       
    )

}

export default CompareTraits;