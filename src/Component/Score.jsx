import styled from "styled-components"

const Score = ( {Score}) => {
  return (
      <Scorecontainer>
        <h1>{Score}</h1>
        <p>Total Score </p>
      </Scorecontainer>
  )
}

export default Score

const Scorecontainer = styled.div`
    max-width: 200px;
    text-align : center;


    h1{
        font-size: 100px;
        line-height: 100px;
      
    }
    p{
        font-size: 24px;
        font-weight: 500;


    }
`;
