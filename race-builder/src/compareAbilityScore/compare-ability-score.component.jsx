import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { Choice, StyledLink,Title, ChoiceContainer, Or, Background } from "../general-styles.styles";

const CompareAbility = () => {
    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);
    const addCustomRaceHandler = (k,v) => addToCustomRace(k, v);
    const onClickAbilityChoice1 = () => abilityHandler(race1);
    const onClickAbilityChoice2 = () => abilityHandler(race2);

    const abilityHandler = (race) => {
        addCustomRaceHandler("ability score", race["ability score"]);
        updateBalance(parseFloat(race["ability score"].bal));
    }

    return(
        <Background>
            <Title>Choose Your Ability Score Increase</Title>
            <ChoiceContainer>
                <Choice onClick={onClickAbilityChoice1}><StyledLink to='/traits'>{race1["ability score"].desc}</StyledLink></Choice>
                <Or>OR</Or>
                <Choice onClick={onClickAbilityChoice2}><StyledLink to='/traits'>{race2["ability score"].desc}</StyledLink></Choice>
            </ChoiceContainer>
        </Background>
    )

}

export default CompareAbility;