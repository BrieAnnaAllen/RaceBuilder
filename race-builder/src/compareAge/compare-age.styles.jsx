import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backimg from '../images/crinkle-page.jpg';


export const AgeTitle = styled.h1`
    text-align: center;
    font-family: 'FlyingBubble';
`
export const AgeChoiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   
`;

export const Or = styled.p`
    text-align: center;
    font-family: 'FlyingBubble', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const AgeChoice = styled.h2`
    text-align: center;
`
export const AgeLink = styled(Link)`
    text-decoration: none;
    font-family: 'FlyingBubble', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    &:hover {
        color: orange;
    }
`
export const Background = styled.div`
    position: absolute;
    display: flex;
   flex-direction: column;
   justify-content: center;
    min-height: 100%;
    min-width: 100%;
    font-size: 2rem;
`