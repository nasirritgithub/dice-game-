import { useState } from "react";
import styled from "styled-components"
import Startgame from "./Component/Startgame";
import Gameplay from "./Component/Gameplay";

 
function App() {
 const [Isgamestartede, setIsgamestartede] = useState(false)
 
   const toggelgame = ()=>{
     setIsgamestartede((prev) => !prev)
   }

  return (
    <>
    {Isgamestartede ?  <Gameplay/> : <Startgame toggle = {toggelgame} />}
      
     
      
    </>
  )
}

export default App
