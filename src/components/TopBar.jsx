
import styled from "styled-components"
import imagem from "../assets/bob.png"

function TopBar() {


  return (
    <>
  <Barra>
    <Texto>TrackIt</Texto>
    <Imagem src={imagem} alt="" />
  </Barra>
    </>
  )
}

export default TopBar

const Barra = styled.div`
  background-color: #126BA5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1;
`;


const Imagem = styled.img`
 height: 51px;
 width: 51px;
 border-radius: 100%;
 border: 2px;
 margin-right: 20px;
`;
const Texto = styled.h1`
  margin-left: 20px;
 font-size: 40px;
`;
