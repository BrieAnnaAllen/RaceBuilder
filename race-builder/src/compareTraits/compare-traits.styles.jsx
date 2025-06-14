import { Link } from "react-router-dom";
import styled from "styled-components";

export const TraitsBackground = styled.div`
    position: absolute;
    display: flex;
   flex-direction: column;
   justify-content: center;
    min-height: 100%;
    min-width: 100%;
    font-size: 1rem;
    text-align: center;
`
export const BalanceScore = styled.h1`
    font-family: 'Euphorigenic', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
`
export const H1Gen = styled.h1`
    font-family: 'ImperatorBronzeCap', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
`
export const Paragraph = styled.p`
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
`
export const TraitsButtons = styled.button`
`
export const TraitButtonH2 = styled.h2`
    font-family: 'ImperatorBronzeCap', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;

`
export const TraitButtonP = styled.p`
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.3rem;

`
export const YesNoDiv= styled.div`
   display:flex;
   justify-content: space-between;
`

export const FinalButton = styled.button`
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 5rem;
    border: none;
    background: none;
    margin: 0 auto;
    &:hover {
        color: darkviolet;
    }
`
export const QuestionButton = styled.button`
    font-family: 'Oldsh', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
    border: none;
    background: none;
    margin: 0 auto;
    &:hover {
        color: darkviolet;
    }
`
export const Linky = styled(Link)`
   text-decoration: none;
   color: inherit
`