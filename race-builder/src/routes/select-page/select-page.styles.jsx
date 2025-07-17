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
export const Paragraph = styled.p`
    font-size: 2.5rem;
    max-width: 60%;
    text-align: center;
    font-family: 'Euphorigenic', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
`
export const OptGroup = styled.optgroup`
    -moz-appearance: none;
    -webkit-appearence: none;
    text-align: center;
    background-color: #cbb9d9;
    font-family: 'Amorlate', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
    
`;

export const Option = styled.option`
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center; 
    font-family: 'CreamYoghurt', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    overflow: auto;
    background-color: #f1a9ca;
    background-attachment: fixed;
    &:hover{
        background-color: #cbb9d9;
    }
    
   
    
`;
export const SubmitButton = styled.button`
    background: none;
    text-decoration: none;
    border: none;
    font-size: 4rem;
    border-radius: 25px;
    display: block;
    min-width: 50%;
    font-family: 'CreamYoghurt', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
    &:hover{
        background-color: rgba(117, 11, 59, 0.2);
        border: 2px solid rgba(241, 169, 202, .1);
    }
    border: 2px solid  rgba(117, 11, 59, 0.2);
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
    font-family: 'CreamYoghurt', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    overflow: auto;
    :top{
        opacity: 20%;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 25px;
    border: 2px solid rgba(117, 11, 59, 0.2);
    
    &:hover{
        background-color: rgba(117, 11, 59, 0.2);
        border: 2px solid rgba(241, 169, 202, .1);
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
    background: radial-gradient(farthest-corner at 50% 50%, #f1a9ca 20%,#cbb9d9,#f1a9ca );
    ::-webkit-scrollbar {
        display: none;
    }


   
    

   // -ms-transform: translateX(-50%) translateY(-50%);
   // -webkit-transform: translate(-50%, -50%);
    //transform: translate(-50%, -50%);
`;
