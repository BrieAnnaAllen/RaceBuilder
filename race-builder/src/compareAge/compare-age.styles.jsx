import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backimg from '../images/crinkle-page.jpg';


export const AgeTitle = styled.h1`
    text-align: center;
    font-family: 'Wizzta';
`;

export const AgeChoiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'MountainKingRegular';
`;

export const Or = styled.p`
    text-align: center;
`;

export const AgeChoice = styled.h2`
    text-align: center;
   //font-family: 'MointainKingRegular';
`
export const AgeLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: orange;
    }
`
export const Background = styled.div`
`