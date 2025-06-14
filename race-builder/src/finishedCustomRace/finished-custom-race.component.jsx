import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";
import { Link } from "react-router-dom";
import { BiracialNameTitle, Background, TraitContainer, TraitHeader, TraitDetails, TH2} from "./finished-custom-race.styles";



const FinishedCustomRace = () => {
    const {customRace, race1, race2} = useContext(CustomContext);
    
    const displayCustomRace = () => {
      var display = [];
      Object.keys(customRace).forEach((key) => {
        console.log("Girl are we even here fr");

        if(key === "traits"){
          display.push(<TH2>Traits</TH2>);
          Object.keys(customRace[key]).forEach((key2) => {
            display.push(<TraitContainer id={`${key2}`} color='red' ><TraitHeader>{capitalFirstLetter(key2)}</TraitHeader><TraitDetails>{customRace[key][key2].desc}</TraitDetails></TraitContainer>)
          })
        }
        else {
          display.push(<TraitContainer id={`${key}`} color='blue'><TraitHeader>{capitalFirstLetter(key)}</TraitHeader><TraitDetails>{customRace[key].desc}</TraitDetails></TraitContainer>)
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