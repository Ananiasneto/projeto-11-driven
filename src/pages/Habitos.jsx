
import styled from "styled-components"
import TopBar from "../components/TopBar"
import BottomBar from "../components/BottomBar"

function Habitos() {


  return (
    <>
    <TopBar/>
    <Container>
    <Habito>
        <TextHabito>Meus habitos</TextHabito>
        <Botao>+</Botao>
    </Habito>

    <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
    </Container>
    <BottomBar/>
    </>
  )
}

export default Habitos

const Habito=styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-right:5%;
margin-left: 5%;
 margin-bottom: 10%;
  `

const TextHabito=styled.div`
font-size: 23px;
color:#126BA5;
 
  `

const Container=styled.div`
  margin-top:90px ;
 
  `
  const Botao=styled.button`
 font-size: 27px;
 background-color: #52B6FF;
 color: #FFFFFF;
 height: 35px;
 width: 40px;
 border: none;
 border-radius: 5px;
  `
  const Text=styled.h1`
  font-size: 20px;
  color: #666666;
  margin-right:5%;
margin-left: 5%;
line-height: 23px;
 
  `