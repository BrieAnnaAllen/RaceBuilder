import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TraitsBackground, TraitsButtons} from "./compare-traits.styles";
import ReactDom from 'react-dom';

var mainColor = 'white';
var secondColor = 'red'

var BUTTON_COLORS1 = {
    0: mainColor,
    1: mainColor, 
    2: mainColor, 
    3: mainColor, 
    4: mainColor,
    5: mainColor,
    6: mainColor, 
    7: mainColor, 
    8: mainColor, 
    9: mainColor, 
    10: mainColor, 

  }
  var BUTTON_COLORS2 = {
    0: mainColor,
    1: mainColor, 
    2: mainColor, 
    3: mainColor, 
    4: mainColor,
    5: mainColor,
    6: mainColor, 
    7: mainColor, 
    8: mainColor, 
    9: mainColor, 
    10: mainColor,
  }

const CompareTraits = () => {
    const {customRace, race1, race2, balance, balanceMax, updateBalance, updateRaceTraits, raceTraits, finished, setFinished} = useContext(CustomContext);

   const Traits1 = race1.traits;
   const Traits2 = race2.traits;
   
   const buttonColor = (isItRace1, i) => {
    if(isItRace1) {
        return BUTTON_COLORS1[`${i}`];
    }
    else {
        return BUTTON_COLORS2[`${i}`];
    }
   }

   
    const traitsHandler = (raceTraitsList, raceKey, isItRace1, i) => {

        if(isItRace1) {
            if(BUTTON_COLORS1[`${i}`] === 'white') {
                BUTTON_COLORS1[`${i}`] = 'blue';
            }
            else { BUTTON_COLORS1[`${i}`] = 'white'}
        }
        else {
            if(BUTTON_COLORS2[`${i}`] === 'white') {
                BUTTON_COLORS2[`${i}`] = 'blue';
            }
            else { BUTTON_COLORS2[`${i}`] = 'white'}
        }
       
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

        var isItRace1 = false;
        if(race === race1) {
            isItRace1 = true;
        }

        for(let i = 0; i < raceKeys.length; i++){
            

            Tr.push(<TraitsButtons style={{backgroundColor: buttonColor(isItRace1, i)}} onClick={() => traitsHandler(traitsT, raceKeys[i], isItRace1, i)}><h2>{`${raceKeys[i]}`}</h2><p>{`${traitsT[raceKeys[i]].desc}`}</p></TraitsButtons>);
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
        <TraitsBackground>
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
            <h1>Balance Score: {balance}</h1>
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
        </TraitsBackground>
        
       
    )

}

export default CompareTraits;