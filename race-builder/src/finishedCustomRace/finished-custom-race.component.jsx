import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";


const FinishedCustomRace = () => {
    const {race1, race2, addToCustomRace, updateBalance} = useContext(CustomContext);


   
    
    return(
        <div>
          Howdy!
        </div>
    )
}


export default FinishedCustomRace;