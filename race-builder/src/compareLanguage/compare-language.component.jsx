import { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../contexts/custom-race.context";
import { Choice, StyledLink,Title, ChoiceContainer, Or, Background } from "../general-styles.styles";

const CompareLanguage = () => {
    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickLanguageChoice1 = () => languageHandler(race1);
    const onClickLanguageChoice2 = () => languageHandler(race2);
  
    const languageHandler = (race) => {
        addToCustomRaceHandler('languages', race.languages);
        updateBalance(parseFloat(race.languages.bal));
    }
   


    return(
        <Background>
            <Title>Choose Your Language Trait</Title>
            <ChoiceContainer>
                <Choice onClick={onClickLanguageChoice1}><StyledLink to='/ability'>{race1.languages.desc}</StyledLink></Choice>
                <Or>OR</Or>
                <Choice onClick={onClickLanguageChoice2}><StyledLink to='/ability'>{race2.languages.desc}</StyledLink></Choice>
            </ChoiceContainer>
        </Background>
    )
}

export default CompareLanguage;