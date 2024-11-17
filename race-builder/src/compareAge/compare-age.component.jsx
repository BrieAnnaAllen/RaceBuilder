import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";

import { AgeTitle, AgeChoiceContainer, Or, AgeChoice, AgeLink} from "./compare-age.styles";


const CompareAge= () => {
    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickAgeChoice1 = () => ageHandler(race1);
    const onClickAgeChoice2 = () => ageHandler(race2);
  
    const ageHandler = (race) => {
        addToCustomRaceHandler('age', race.age);
        updateBalance(parseFloat(race.age.bal));
    }
   
    
    return(
        <div>
            <AgeTitle>Make Your Choice Of Age Range</AgeTitle>
            <AgeChoiceContainer>
                <AgeChoice onClick={onClickAgeChoice1}><AgeLink to='/size'>{race1.age.desc}</AgeLink></AgeChoice>
                <Or>OR</Or>
                <AgeChoice onClick={onClickAgeChoice2}><AgeLink to='/size'>{race2.age.desc}</AgeLink></AgeChoice>
            </AgeChoiceContainer>
        </div>
    )
}


export default CompareAge;