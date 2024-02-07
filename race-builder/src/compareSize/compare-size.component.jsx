import { CustomContext } from "../contexts/custom-race.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CompareSize = () => {

    const {race1, race2, addToCustomRace} = useContext(CustomContext);

    const addToCustomRaceHandler = (k, v) => addToCustomRace(k, v);
    const onClickSizeChoice1 = () => sizeHandler(race1);
    const onClickSizeChoice2 = () => sizeHandler(race2);
  
    const sizeHandler = (race) => {
        addToCustomRaceHandler('size', race.size);
    }
   
    
    return(
        <div>
            <h1>Make Your Choice Of Size</h1>
            <h2 onClick={onClickSizeChoice1}><Link to='/speed'>{race1.size.desc}</Link></h2>
            <p>OR</p>
            <h2 onClick={onClickSizeChoice2}><Link to='/speed'>{race2.size.desc}</Link></h2>
        </div>
    )
}

export default CompareSize;