import styled from "styled-components"
import Score from './Score'
import Numberselector from './Numberselector'
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlinButton } from "../Styled/Button";


const Gameplay = () => {
   
    const [Selectnumber, setSelectnumber] = useState(false)
    const [Currendice, setCurrendice] = useState(1);
    const [score, setscore] = useState(0)
    const [error, seterror] = useState()
     

   const roledice = ()=>{
     if (!Selectnumber) {
        seterror("You have no select a number ")
        return;
    }
     const  newDiceNumber = Math.floor(Math.random() * 6) + 1;
    setCurrendice(newDiceNumber);

    console.log("dice num is " ,Currendice)
    if ( newDiceNumber === Selectnumber ) {
        setscore((e) => e+ newDiceNumber)
    }
    else {
        setscore( (e) => e -1 )
    }
   
 
    setSelectnumber(undefined) 
   }
   const resetscore =()=>{
      setscore(0)
   }


    return (
        <Mainsection >
            <div className="top">
                <Score Score={score} />
                <Numberselector seterror ={seterror} Selectnumber={Selectnumber} setSelectnumber={setSelectnumber} error={error} />
            </div>
            <Rolldice Currendice={Currendice} roledice={roledice}  />
            <div className="btn">
               <OutlinButton onClick={resetscore} >Reset</OutlinButton >
               <Button>Show Rules</Button>
            </div>
           
        </Mainsection >

    );
};

export default Gameplay

const Mainsection = styled.div`
.top{
    display: flex;
   justify-content: space-between;
    max-width: 1281px;
    margin:  0px auto;
     padding-top: 70px;
}
.btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

 
`;

