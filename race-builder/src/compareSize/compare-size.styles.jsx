import styled from "styled-components"
import { Link } from "react-router-dom";

export const Background = styled.div`
    position: absolute;
    display: flex;
   flex-direction: column;
   justify-content: center;
    min-height: 100%;
    min-width: 100%;
    font-size: 2rem;
`
export const SizeTitle = styled.h1`
    text-align: center;
    font-family: 'Wizzta';
`;

export const SizeChoiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'MountainKingRegular';
`;

export const Or = styled.p`
    text-align: center;
`;

export const SizeChoice = styled.h2`
    text-align: center;
   //font-family: 'MointainKingRegular';
`
export const SizeLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: orange;
    }
`