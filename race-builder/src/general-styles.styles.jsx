import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Title = styled.h1`
    text-align: center;
    font-family: 'Euphorigenic', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const ChoiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'MainFont2';
`;

export const Or = styled.p`
    text-align: center;
    font-weight: bold;
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Choice = styled.h2`
    text-align: center;
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 30px;
    margin-right: 30px;
   //font-family: 'MointainKingRegular';
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: purple;
    }
`
export const Background = styled.div`
    position: absolute;
    display: flex;
   flex-direction: column;
   justify-content: center;
    min-height: 100%;
    font-size: 2rem;
`