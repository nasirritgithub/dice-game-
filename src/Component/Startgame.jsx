import styled from "styled-components"
import { Button } from "../Styled/Button";

const Startgame = ({toggle}) => {
    return (
        <Container>
            <div> <img src="/images/dices 1.png" alt="Dice image " /></div>
            <div className="component">
                <h1>DICE GAME</h1>
                <Button onClick={toggle} >Play Now</Button>
            </div>
        </Container>
    )
}

export default Startgame

const Container = styled.div`
       display: flex;
       align-items: center;
       /* justify-content: space-around; */
       gap: 100px;
       max-width: 1180px;
       margin: 0 auto;
       height: 100vh;
   .component h1{
     font-size: 90px;
     white-space: nowrap;
     position: relative;
   }
`;
