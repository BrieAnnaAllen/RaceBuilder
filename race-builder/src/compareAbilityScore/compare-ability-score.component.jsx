import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";

const CompareAbility = () => {
    const {race1, race2, addToCustomRace} = useContext(CustomContext);
    const addCustomRaceHandler = (k,v) => addToCustomRace(k, v);
    const onClickAbilityChoice1 = () => abilityHandler(race1);
    const onClickAbilityChoice2 = () => abilityHandler(race2);

    const abilityHandler = (race) => {
        addCustomRaceHandler("ability score", race["ability score"]);
    }

    return(
        <div>
            <h1>Choose Your Ability Score Increase</h1>
            <h2 onClick={onClickAbilityChoice1}><Link to='/traits'>{race1["ability score"].desc}</Link></h2>
            <h2 onClick={onClickAbilityChoice2}><Link to='/traits'>{race2["ability score"].desc}</Link></h2>
        </div>
    )

}

export default CompareAbility;