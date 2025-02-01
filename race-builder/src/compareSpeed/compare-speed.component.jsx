import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { Choice, StyledLink,Title, ChoiceContainer, Or, Background } from "../general-styles.styles";

const CompareSpeed = () => {
    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickSpeedChoice1 = () => speedHandler(race1);
    const onClickSpeedChoice2 = () => speedHandler(race2);
  
    const speedHandler = (race) => {
        addToCustomRaceHandler('speed', race.speed);
        updateBalance(parseFloat(race.speed.bal));
    }
   
    
    return(
        <Background>
            <ChoiceContainer>
            <Title>Choose Your Speed Trait</Title>
                <Choice onClick={onClickSpeedChoice1}><StyledLink to='/languages'>{race1.speed.desc}</StyledLink></Choice>
                <Or>OR</Or>
                <Choice onClick={onClickSpeedChoice2}><StyledLink to='/languages'>{race2.speed.desc}</StyledLink></Choice>
            </ChoiceContainer>
        </Background>
    )
}


export default CompareSpeed;