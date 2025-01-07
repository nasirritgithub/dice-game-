import styled from "styled-components"
import { useState } from "react"

const Rolldice = ({Currendice,roledice}) => {

    console.log(" i am from rolldice " +Currendice)

  return (
    <Dicecontainer>
    
      <div className="flex" >
        <img onClick={roledice} src={`/images/dice/dice_${Currendice}.png`} alt="Dice" />
        <h3>Click on Dice to roll</h3>
      </div>
    </Dicecontainer>
  )
}

export default Rolldice


const Dicecontainer = styled.div`

  .flex{
   display: flex;
   align-items: center;
   cursor: pointer;
   margin-top: 50px;
   flex-direction: column;
  }
  .flex img{
     width: 400px;
     height: 400px;
  }
`;