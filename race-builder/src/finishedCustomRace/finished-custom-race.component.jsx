import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { BiracialNameTitle } from "./finished-custom-race.styles";

import { Background } from "../general-styles.styles";


const FinishedCustomRace = () => {
    const {customRace, race1, race2} = useContext(CustomContext);
    
    const displayCustomRace = () => {
      var display = [];
      Object.keys(customRace).forEach((key) => {
        console.log("Girl are we even here fr");

        if(key === "traits"){
          display.push(<h2>Traits</h2>);
          Object.keys(customRace[key]).forEach((key2) => {
            display.push(<div id={`${key2}`} color='red' ><h3>{capitalFirstLetter(key2)}</h3><p>{customRace[key][key2].desc}</p></div>)
          })
        }
        else {
          display.push(<div id={`${key}`} color='blue'><h3>{capitalFirstLetter(key)}</h3><p>{customRace[key].desc}</p></div>)
        }
      });
      
      console.log("Display: ");
      console.log(display);
      return display;
    
    }

    const biracialName = (r1, r2) => {
      var name = r1.split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');

      name += ' -'

      name += " " + (r2.split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '));
      return name;

      
    }
   
    const capitalFirstLetter = (word) => {
      //add code to check if one work or more
      console.log(word);
      var w = word.charAt(0).toUpperCase() + word.slice(1);
      console.log(word);
      return w;
    }
    
    return(
        <Background>
          <BiracialNameTitle>{biracialName(race1.name, race2.name)} Traits</BiracialNameTitle>
          {displayCustomRace()}
        </Background>
    )
}


export default FinishedCustomRace;