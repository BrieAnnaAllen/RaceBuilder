import { Component, useContext} from 'react';
import {Link} from 'react-router-dom';
import { RacesContext } from '../../contexts/all-races.context';


const SelectPage = () => {
  const {races} = useContext(RacesContext);

  const createSelectStatements = () => {
    for (let index = 0; index < 2; index++) {
      return (
        <select name={`race${index}`}>
          {races.map((race) => {
            return (<option key={races.id} value={races.name}></option>)
          })}
        </select>
      )
    }
  
  };
  const {id, names} = races;
  return (
    
    <div>
      {createSelectStatements()}
    </div>
  )
}

export default SelectPage;
// class SelectPage extends Component {

//   constructor(props){
//     super(props);
//     console.log(props);

//   }

//    racesSelectPopulation(){
//     const tempMap = this.props.races.map((race) => {
//      return <option key={race.id}value={race.name.toLowerCase()}>{race.name}</option>
//       })
//     const defaultEl = <option key={0} value="default">Please select</option>;
//     tempMap.unshift(defaultEl);
//     return tempMap;
//     }
    
//     onChangeSave = (e) => {
//         this.props.onChangeSaveSelect(e)
//     }
  
//     render() {
//         return(
//         <div>
//         <select name="race1" id="race1" onChange={this.onChangeSave} >
//           {this.racesSelectPopulation()}
//         </select>
//         <select name="race2" id="race2" onChange={this.onChangeSave} >
//         {this.racesSelectPopulation()}
//         </select>
//        <Link className='age-link' to='/age'>
//        <button>Submit</button>
//        </Link>
        
//       </div>

//     )
//         }

// }

// export default SelectPage;