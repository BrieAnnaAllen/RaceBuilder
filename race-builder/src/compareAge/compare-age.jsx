import { render } from "@testing-library/react";
import { Component } from "react";

class CompareAge extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
   
    
    // displayAge() {
    //     console.log('hello');
    //     var race1 = this.props.races.find( race => race.name == this.props.choice1)
    //     return race1.age;
    
    // }

    displayAge(){
        console.log('hello');
    }
        

render() {


    return(
        <div>
            <h1>Choose One Of the Following</h1>
            <p></p>
        </div>
    )
    }
}


export default CompareAge;