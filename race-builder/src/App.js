import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      races: [],
    }
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


  render () {
    return(
      <div>
        {this.state.races.map((race) => {
          return (
            <div>
              <h1>{race.name}</h1>
              <h2>{race.subrace}</h2>
            </div>
          )
        })}

      </div>
    )
  }
}


export default App;
