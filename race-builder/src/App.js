import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import React, {createRef, useRef} from 'react'
import CompareAge from './compareAge/compare-age';

class App extends Component{
  constructor(){
    super();

    this.state = {
      races: [],
      choice1: " ",
      choice2: " ",
      agecomponenet: <CompareAge></CompareAge>
    };

    this.onChangeSaveSelect = this.onChangeSaveSelect.bind(this);
    this.onClickUpdateRaces = this.onClickUpdateRaces.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/BrieAnnaAllen/RaceBuilder/main/race-builder/races-file.json')
    .then((response) => response.json())
    .then((race) =>
    this.setState(
      () => {
        return {races: race};
      }
    ))
  }

onClickUpdateRaces(e){
  console.log('delivery');
}

onChangeSaveSelect(e){
  if(e.target.id = "race1"){
    this.setState({ choice1: e.target.value});
  }
  else{
    this.setState({ choice2: e.target.value});
  }
  
}

racesSelectPopulation(){
const tempMap = this.state.races.map((race) => {
 return <option key={race.id}value={race.name.toLowerCase()}>{race.name}</option>
  })
const defaultEl = <option key={0} value="default">Please select</option>;
tempMap.unshift(defaultEl);
return tempMap;
  
}

  render () {
  
    return(
      <div>
        <select name="race1" id="race1" onChange={this.onChangeSaveSelect} >
          {this.racesSelectPopulation()}
        </select>
        <select name="race2" id="race2" onChange={this.onChangeSaveSelect}>
        {this.racesSelectPopulation()}
        </select>
        <button onClick={this.onClickUpdateRaces}>Submit</button>
        {/* {this.state.races.map((race) => {
          return (
            <div>
              <select key={race.id}>{race.name}</button>
             <button></button>
            </div>
          )
        })} */}

      </div>
    )
  }
}


export default App;
