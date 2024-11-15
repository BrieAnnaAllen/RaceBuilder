
import './App.css';
import {Component} from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import { RacesContext } from './contexts/all-races.context';
import SelectPage from './routes/select-page/select-page.component';
import CompareAge from './compareAge/compare-age.component';
import CompareSize from './compareSize/compare-size.component';
import CompareSpeed from './compareSpeed/compare-speed.component';
import CompareAbility from './compareAbilityScore/compare-ability-score.component';
import CompareLanguage from './compareLanguage/compare-language.component';
import CompareTraits from './compareTraits/compare-traits.component';
import FinishedCustomRace from './finishedCustomRace/finished-custom-race.component';


// https://docs.google.com/spreadsheets/d/1vq1kz6PRAbw5LHy6amH-bNb4OuB8DBXL1RsZROt03Sc/edit#gid=872807765
//Can be between 17 and 33.  Low:  17 - 22, Average: 23 - 27, High: 28 - 33.  Cant exceed 33 and cant be less than 17


const App = () => {
  const {races} = useContext(RacesContext);

  return (
    <Routes>
      <Route index element={<SelectPage/>}></Route>
      <Route path="/age" element={<CompareAge/>}></Route>
      <Route path="/size" element={<CompareSize/>}></Route>
      <Route path="/speed" element={<CompareSpeed/>}></Route>
      <Route path="/languages" element={<CompareLanguage/>}></Route>
      <Route path="/ability" element={<CompareAbility/>}></Route>
      <Route path="/traits" element={<CompareTraits/>}></Route>
      <Route path="/finished-custom-race" element={<FinishedCustomRace/>}></Route>
    </Routes>
  )

}
// class App extends Component{
//   constructor(){
//     super();


//     // this.onChangeSaveSelect = this.onChangeSaveSelect.bind(this);
//     this.onClickUpdateRaces = this.onClickUpdateRaces.bind(this);
//   }

//   componentDidMount() {
//     fetch('https://raw.githubusercontent.com/BrieAnnaAllen/RaceBuilder/main/race-builder/races-file.json')
//     .then((response) => response.json())
//     .then((race) =>
//     this.setState(
//       () => {
//         return {races: race};
//       }
//     ))
//   }

// onClickUpdateRaces(e){
//   console.log('delivery');
// }


//  onChangeSaveSelect = (e) =>{
//   if(e.target.id == "race1"){
//     this.setState({ choice1: e.target.value });
    
//   }
//   else{
//     this.setState({ choice2: e.target.value});
//   }

// }



 



export default App;
