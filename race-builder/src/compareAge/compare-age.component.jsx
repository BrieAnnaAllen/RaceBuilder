import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";


const CompareAge= () => {
    const {race1, race2, addToCustomRace} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickAgeChoice1 = () => ageHandler(race1);
    const onClickAgeChoice2 = () => ageHandler(race2);
  
    const ageHandler = (race) => {
        addToCustomRaceHandler('age', race.age);
        console.log("hi");
    }
   
    
    return(
        <div>
            <h1>Make Your Choice Of Age Range</h1>
            <h2 onClick={onClickAgeChoice1}><Link to='/size'>{race1.age.desc}</Link></h2>
            <p>OR</p>
            <h2 onClick={onClickAgeChoice2}><Link to='/size'>{race2.age.desc}</Link></h2>
        </div>
    )
}


export default CompareAge;