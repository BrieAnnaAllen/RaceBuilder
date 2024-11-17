import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AgeTitle = styled.h1`
    text-align: center;
`;

export const AgeChoiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Or = styled.p`
    text-align: center;
`;

export const AgeChoice = styled.h2`
    text-align: center;
   // font-family: 'MointainKingRegular';
`
export const AgeLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: orange;
    }
`
