import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";

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
        <div>
            <h1>Make Your Choice Of Speed</h1>
            <h2 onClick={onClickSpeedChoice1}><Link to='/languages'>{race1.speed.desc}</Link></h2>
            <p>OR</p>
            <h2 onClick={onClickSpeedChoice2}><Link to='/languages'>{race2.speed.desc}</Link></h2>
        </div>
    )
}


export default CompareSpeed;