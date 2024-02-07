import { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../contexts/custom-race.context";

const CompareLanguage = () => {
    const {race1, race2, addToCustomRace} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickLanguageChoice1 = () => languageHandler(race1);
    const onClickLanguageChoice2 = () => languageHandler(race2);
  
    const languageHandler = (race) => {
        addToCustomRaceHandler('languages', race.languages);
    }
   


    return(
        <div>
            <h1>Choose Your Language</h1>
            <h2 onClick={onClickLanguageChoice1}><Link to='/ability'>{race1.languages.desc}</Link></h2>
            <h2 onClick={onClickLanguageChoice2}><Link to='/ability'>{race2.languages.desc}</Link></h2>
        </div>
    )
}

export default CompareLanguage;