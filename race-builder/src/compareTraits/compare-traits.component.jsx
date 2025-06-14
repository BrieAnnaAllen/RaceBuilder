import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TraitsBackground, YesNoDiv, QuestionButton, Linky, TraitsButtons, BalanceScore, Paragraph, TraitButtonH2, TraitButtonP, H1Gen, FinalButton} from "./compare-traits.styles";
import ReactDom from 'react-dom';

var mainColor = 'pink';
var secondColor = 'lightblue'

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
            if(BUTTON_COLORS1[`${i}`] === mainColor) {
                BUTTON_COLORS1[`${i}`] = secondColor;
            }
            else { BUTTON_COLORS1[`${i}`] = mainColor}
        }
        else {
            if(BUTTON_COLORS2[`${i}`] === mainColor) {
                BUTTON_COLORS2[`${i}`] = secondColor;
            }
            else { BUTTON_COLORS2[`${i}`] = mainColor}
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
            

            Tr.push(<TraitsButtons style={{backgroundColor: buttonColor(isItRace1, i)}} onClick={() => traitsHandler(traitsT, raceKeys[i], isItRace1, i)}><TraitButtonH2>{`${raceKeys[i]}`}</TraitButtonH2><TraitButtonP>{`${traitsT[raceKeys[i]].desc}`}</TraitButtonP></TraitsButtons>);
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
            <BalanceScore>Balance Score: {balance}</BalanceScore>
            <Paragraph>Please Note: your balance score cannot go over 33. This is to keep your character fair and balanced in line with other d&d races. </Paragraph>
            <H1Gen>{race1.name} Traits</H1Gen>
            {displayRaceTraits(race1)}
            <H1Gen>{race2.name} Traits</H1Gen>
            {displayRaceTraits(race2)}
            <br></br>
           { finished ? (
            <div>
                <Paragraph>Are You Sure?</Paragraph>
                <YesNoDiv>
                <QuestionButton><Linky to='/finished-custom-race'>Yes</Linky></QuestionButton>
                <QuestionButton onClick={() => toggleFinished()}>No</QuestionButton>
                </YesNoDiv>
            </div>
           ) : ( <FinalButton onClick={() => finalizationHandler() }>Finalize</FinalButton> ) }
           <br></br>
        </TraitsBackground>
        
       
    )

}

export default CompareTraits;