import { useContext } from "react";
import { CustomContext } from "../contexts/custom-race.context";



const CompareTraits = () => {
    const {customRace, race1, race2} = useContext(CustomContext);
    console.log(customRace);

    return(
        <div>
            <h1>Half {race1.name}, half {race2.name}</h1>
            <h2>Ability Score Increase</h2>
            <p>{customRace["ability score"].desc}</p>
            <h2>Age</h2>
            <p>{customRace.age.desc}</p>
            <h2>Size</h2>
            <p>{customRace.size.desc}</p>
            <h2>Speed</h2>
            <p>{customRace.speed.desc}</p>
            <h2>Languages</h2>
            <p>{customRace.languages.desc}</p>
        </div>
        
       
    )

}

export default CompareTraits;