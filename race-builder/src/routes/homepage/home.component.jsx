import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Background, Logo, Enter } from "./home.styles";
import bizzybrie from '../../images/BizzyBrie.png'
import { Link } from "react-router-dom";
 

const Home = () => {

    return(
        <Background>
            <Logo src={bizzybrie}></Logo>
            <Enter to="/select-page">Enter</Enter>
        </Background>

    )
}

export default Home;