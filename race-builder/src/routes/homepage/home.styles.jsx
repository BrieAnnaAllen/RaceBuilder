import styled, { keyframes } from "styled-components";

export const Background = styled.div`
    background-color: #f2a9ca;
    min-height: 100%;
`

export const LogoAnimation = keyframes`
    0% { 
        transform:translate(-100%, -30%);//peak
    }
    
    20%{
        transform:translate(-70%, 0%);//floor
    }
    33% {
        transform:translate(-53% -23%)
    }
    35%{
        transform:translate(-50%, -25%);//peak
    }
    37% {
        transform:translate(-47% -23%)
    }

    50%{
        transform:translate(-20%, 0%);//floor
    }

    58% {
        transform:translate(-13%, -13%);
    }

    60%{
        transform:translate(-10%, -15%);//peak
    }
    62%{
        transform:translate(-8%, -13%);
    }
   
    70% { 
        transform:translate(0%, 0%); //floor
    }

    78% {
        transform:translate(8%, -8.5%);
    }
    80% { 
        transform:translate(10%, -10%); //peak
    }

    82%{
        transform:translate(12%, -8.5%);
    }
    90% { 
        transform:translate(15%, 0%); //floor
    }
    94%{
        transform:translate(21%, -6%);
    }

    95% { 
        transform:translate(22%, -7%); //peak
    }
    95.5%{
        transform:translate(23%, -6%);
    }

    97% { 
        transform:translate(25%, 0%); 
    }
    98.7%{
        transform:translate(27.5%, -2.5%);
    }
    99% { 
        transform:translate(28%, -3%); //peak
    }
    99.3%{
        transform:translate(28.5%, -2.5%);
    }

    100% { 
        transform:translate(30%, 0%); 
        }
`

export const EnterAnimation = keyframes`
    0%{
        display: none;
    }
    
    100%{
        display: block;
    }
`
export const Enter = styled.p`
    font-size: 10rem;
    position: relative;
    animation-duration: 2s;
    transition: visibility 1s, opacity 1s;
    visibility: hidden; 
    opacity:0;

`
export const Logo = styled.img`
    position: relative;
    max-width: 60%;
    animation-name: ${LogoAnimation};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
`

