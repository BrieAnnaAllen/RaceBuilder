import { Outlet } from "react-router-dom";

const Home = () => {

    return(
        <div>
             <select name="race1" id="race1" onChange={this.onChangeSaveSelect} >
                {this.racesSelectPopulation()}
                </select>
                <select name="race2" id="race2" onChange={this.onChangeSaveSelect}>
                    {this.racesSelectPopulation()}
                    </select>
                    <button onClick={this.onClickUpdateRaces}>Submit</button>
        </div>

    )
}

export default Home;