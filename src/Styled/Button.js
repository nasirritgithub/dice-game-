import styled from "styled-components"


 export const Button = styled.button`
 background-color: #000000;
 color: white;
 padding: 10px 18px;
 border-radius: 5px;
 min-width: 220px;
 max-width: 320px;
 border: none;
 font-size: 16px;
 border: 1px solid transparent;
 transition: 0.4s background ease-in;

 &:hover{
    background-color: #fffcfc;
    color: #000000;
    border: 1px solid black;
    transition: 0.3s background ease-in;
    cursor: pointer;
 }
`;

 export const OutlinButton = styled(Button)`
     background-color: white;
     color: black;
     border: 1px solid black;
    &:hover{
    background-color: black;
    color: white;
    border: 1px solid  transparent;
    transition: 0.3s background ease-in;
    cursor: pointer;
 }
 `;

