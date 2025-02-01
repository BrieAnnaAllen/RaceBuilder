import styled from "styled-components";
import keyframes from "styled-components";
import img from '../select-page/crinkle-page.jpg';
import { Link } from "react-router-dom";



export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    min-width: 100%;
`

export const ListConfig = styled.li`
    
`

export const UnorderedListConfig = styled.ul`
    
`

export const SubHeader = styled.ul`
    
`

export const OptGroup = styled.optgroup`
    -moz-appearance: none;
    -webkit-appearence: none;
    text-align: center;
    background-color: #956a47;
    
    
`;

export const Option = styled.option`
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center; 
    overflow: auto;
    background-color: #ccad80;
    background-attachment: fixed;
    &:hover{
        background-color: #956a47;
    }
    
   
    
`;
export const SubmitButton = styled.button`
    background: none;
    text-decoration: none;
    border: none;
    font-size: 4rem;
    border-radius: 25px;
    
    &:hover{
        background-color: rgba(112, 77, 54, .1);
        border: 2px solid rgba(112, 77, 54, .1);
    }
    border: 2px solid rgba(112, 77, 54, .3);
    
   
    
`
export const SubLink = styled(Link)`
   text-decoration: none;
   color: black;
`


export const SelectConfig = styled.select`
    appearance: none;
    background: transparent;
    border: none;
    font-size: 4rem;
    overflow: auto;
    :top{
        opacity: 20%;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 25px;
    border: 2px solid rgba(112, 77, 54, .3);
    
    &:hover{
        background-color: rgba(112, 77, 54, .1);
        border: 2px solid rgba(112, 77, 54, .1);
    }
    
    /* &:hover ${OptGroup}{
        box-shadow: 0 0 10px 100px #1882A8 inset;
        display: block;
    } */
`;

export const SelectContainer = styled.div`


    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    background-color: #956a47;
    background: radial-gradient(farthest-corner at 50% 50%, #ccad80 20%,#956a47,#704d36 );
    ::-webkit-scrollbar {
        display: none;
    }


   
    

   // -ms-transform: translateX(-50%) translateY(-50%);
   // -webkit-transform: translate(-50%, -50%);
    //transform: translate(-50%, -50%);
`;
