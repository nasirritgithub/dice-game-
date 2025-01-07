import styled from "styled-components"
import { useState } from "react";

const Numberselector = ({ error, seterror, Selectnumber, setSelectnumber }) => {
    const arraynum = [1, 2, 3, 4, 5, 6];


    const Numberselecterhandler = (value) => {
        seterror("")
        setSelectnumber(value);

    };

    return (
        <Containerselect>
            <h3>{error}</h3>
            <div className="flex">
                {arraynum.map((value, i) => (
                    <Box
                        isselected={value == Selectnumber}
                        key={i}
                        onClick={() => Numberselecterhandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number </p>
        </Containerselect>
    )
}

export default Numberselector
const Containerselect = styled.div`
    position: relative;
 .flex{
    gap: 24px;
    display: flex;
 }
 P{
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    left: 380px;
    margin-top: 24px;
    white-space: nowrap;
 }
 h3{
    color: red;
 }
`;

const Box = styled.div`
  height: 72px;
 
  width: 72px ;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px ;
  font-weight: 700;
  background-color: ${({ isselected }) => (isselected ? "black" : "white")};
  color:  ${({ isselected }) => (isselected ? "white" : "black")};
  cursor: pointer;

`;
