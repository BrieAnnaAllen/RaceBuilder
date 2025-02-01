import { CustomContext } from "../contexts/custom-race.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Choice, StyledLink,Title, ChoiceContainer, Or, Background } from "../general-styles.styles";

const CompareSize = () => {

    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickSizeChoice1 = () => sizeHandler(race1);
    const onClickSizeChoice2 = () => sizeHandler(race2);
  
    const sizeHandler = (race) => {
        addToCustomRaceHandler('size', race.size);
        updateBalance(parseFloat(race.size.bal));
    }
   
    
    return(
        <Background>
            <Title>Make Your Choice Of Size</Title>
            <ChoiceContainer>
            <Choice onClick={onClickSizeChoice1}><StyledLink to='/speed'>{race1.size.desc}</StyledLink></Choice>
            <Or>OR</Or>
            <Choice onClick={onClickSizeChoice2}><StyledLink to='/speed'>{race2.size.desc}</StyledLink></Choice>
            </ChoiceContainer>
        </Background>
    )
}

export default CompareSize;