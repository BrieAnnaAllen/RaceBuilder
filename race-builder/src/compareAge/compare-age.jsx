import { render } from "@testing-library/react";
import { Component } from "react";

class CompareAge extends Component{
   
    render(){

        console.log("here");
        const {races} = this.props;
        return(
        <h1>hi</h1>
        )
    }
}


export {CompareAge};