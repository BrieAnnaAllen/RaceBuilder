import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";

import { Choice, StyledLink,Title, ChoiceContainer, Or, Background } from "../general-styles.styles";


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
        <Background>
            <Title>Choose Your Age Trait</Title>
            <ChoiceContainer>
                <Choice onClick={onClickAgeChoice1}><StyledLink to='/size'>{race1.age.desc}</StyledLink></Choice>
                <Or>OR</Or>
                <Choice onClick={onClickAgeChoice2}><StyledLink to='/size'>{race2.age.desc}</StyledLink></Choice>
            </ChoiceContainer>
        </Background>
    )
}


export default CompareAge;