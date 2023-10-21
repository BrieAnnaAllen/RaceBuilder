import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import React, {createRef, useRef} from 'react'
import CompareAge from './compareAge/compare-age';
import {Routes, Route, Outlet} from 'react-router-dom';
import SelectPage from './routes/select-page/select-page.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      races: [],
      choice1: " ",
      choice2: " "
    };

    // this.onChangeSaveSelect = this.onChangeSaveSelect.bind(this);
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


 onChangeSaveSelect = (e) =>{
  if(e.target.id == "race1"){
    this.setState({ choice1: e.target.value });
    
  }
  else{
    this.setState({ choice2: e.target.value});
  }

}



  render () {
  
    return(
      

        <Routes>
          <Route path='/' element={<SelectPage races={this.state.races} onChangeSaveSelect={this.onChangeSaveSelect}/>}/>
          <Route path='age' element={<CompareAge races={this.state.races} choice1={this.state.choice1} choice2={this.state.choice2}></CompareAge>}/>
        </Routes>

   
    )
  }
}


export default App;
