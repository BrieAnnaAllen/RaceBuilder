import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";


const FinishedCustomRace = () => {
    const {customRace} = useContext(CustomContext);
    
    const displayCustomRace = () => {
      var display = [];
      Object.keys(customRace).forEach((key) => {
        console.log("Girl are we even here fr");

        if(key === "traits"){
          display.push(<h2>Traits</h2>);
          Object.keys(customRace[key]).forEach((key2) => {
            display.push(<div id={`${key2}`} ><h3>{key2}</h3><p>{customRace[key][key2].desc}</p></div>)
          })
        }
        else {
          display.push(<div id={`${key}`} ><h3>{key}</h3><p>{customRace[key].desc}</p></div>)
        }
      });
      
      console.log("Display: ");
      console.log(display);
      return display;
    
    }
   
    
    return(
        <div>
          {displayCustomRace()}
        </div>
    )
}


export default FinishedCustomRace;