import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { RacesContext } from '../../contexts/all-races.context';
import { useRef } from 'react';
import { CustomContext } from '../../contexts/custom-race.context';

const ALL_SUPER_RACES = {
  tieflings: 'tieflings',
  dwarves: 'dwarves',
  elves: 'elves'

}


const SelectPage = () => {
  const {races} = useContext(RacesContext);
  const {SetRaces} = useContext(CustomContext);
  const select1 = useRef(null);
  const select2 = useRef(null);


const SetRacesHandler = (t1, t2) => SetRaces(t1, t2);

 const onClickChooseRaces = () => {

  const temp1 = RaceFilter(select1);
  const temp2 = RaceFilter(select2);

  SetRacesHandler(temp1, temp2);

 }

 const RaceFilter = (select) => {
  return races.filter((race) => {
    if(race.name == select.current.value){
      return race;
    }
  });
}

const OptionCreation = () => {
  var optgr = [];

  const superKeys = Object.keys(ALL_SUPER_RACES);
  for (let i = 0; i < superKeys.length; i++) {
    var opt = [];
    races.map((race) => {
      if(superKeys[i] == race.super){
      opt.push(<option key={race.id}>{race.name}</option>)
    }});
    optgr.push(<optgroup label={`${superKeys[i]}`.toUpperCase()}>{opt}</optgroup>)
  }
  return optgr;
  // return races.map((race) => <option key={race.id}>{race.name}</option>)
}

  return (
    <div>
       <select ref={select1}>
        {OptionCreation()}
          {/* {races.map((race) => <option key={race.id}>{race.name}</option>)} */}
        </select>
        <select  ref={select2}>
        {OptionCreation()}
        </select>
        <button onClick={onClickChooseRaces}><Link to='/age'>Select</Link></button>
    </div>
  )
}




export default SelectPage;
