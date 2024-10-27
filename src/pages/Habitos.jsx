
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
    <AdcHabito> {/* isso eh mostrado ao clicar no botao de + tarefas*/} 
        <Input type="text" placeholder="Nome do habito "/>
        <Dias>
          <DiaSemana dia="D">D</DiaSemana>
          <DiaSemana dia="S">S</DiaSemana>
          <DiaSemana dia="T">T</DiaSemana>
          <DiaSemana dia="Q">Q</DiaSemana>
          <DiaSemana dia="Q">Q</DiaSemana>
          <DiaSemana dia="S">S</DiaSemana>
          <DiaSemana dia="S">S</DiaSemana>
        </Dias>
        <Botoes>
          <BotaoCancelar>Cancelar</BotaoCancelar>
          <BotaoSalvar>Salvar</BotaoSalvar>
        </Botoes>
    </AdcHabito>

    {/*<Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> isso aparece se n tiver habito pra mostrar na aba Hoje*/}
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
const Input=styled.input`
  height: 45px;
  width: 90% ;
  color: #D4D4D4;
  border: 1px solid;
  border-radius: 5px;
  &::placeholder {
  color: #DBDBDB;
} `

const AdcHabito=styled.div`
display: none;
flex-direction: column;
  margin-left: 5%;
   
`
const Dias=styled.div`
  
   
`

const Botoes=styled.div`
display: flex;
justify-content: flex-end;
  margin-right: 10%;
  gap: 5%;
  margin-top:5% ;
`

const BotaoCancelar=styled.button`


color:#52B6FF ;
font-size: 20px;
border : none;
`
const BotaoSalvar=styled.button`

color:#FFFFFF ;
font-size: 20px;
background-color: #52B6FF;
border: none;
border-radius:5px;


  
   
`
const DiaSemana=styled.button`
margin-top: 10px;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 1px #d4d4d4 solid;
  color:#d4d4d4;
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