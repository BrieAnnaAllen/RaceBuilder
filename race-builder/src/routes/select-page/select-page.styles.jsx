import styled from "styled-components";
import keyframes from "styled-components";

export const OptGroup = styled.optgroup`
    -moz-appearance: none;
    -webkit-appearence: none;
    text-align: center;
    background: none;
    
    
    
    
`;

export const Option = styled.option`
    text-align: center; 
    background: none;
    overflow: auto;
    
`;

export const SelectConfig = styled.select`
    appearance: none;
    background: none;
    border: none;
    font-size: 80px;
    overflow: auto;
`;

export const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    min-width: 100%;

   // -ms-transform: translateX(-50%) translateY(-50%);
   // -webkit-transform: translate(-50%, -50%);
    //transform: translate(-50%, -50%);
`;

export const SubmitButton = styled.button`
    background: none;
    border: none;
`;
