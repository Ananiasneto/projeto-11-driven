import styled from "styled-components"
import React, { useState } from "react"; 
import TopBar from "../components/TopBar"
import BottomBar from "../components/BottomBar"
import CheckIcon from '@mui/icons-material/Check';
function Hoje() {
    const [selecionado, setSelecionado] = useState(false); 

    const botaoSelecionado = () => {
      setSelecionado(!selecionado);
    };

    return (
      <>
      <TopBar/>
      <Container>
      <Data>
        <TextData>Segunda, 17/05</TextData>
    </Data>
        <Tarefa>
            <Textos>
                <Principal>Ler 1 capítulo de livro</Principal>
                <SubTitulo>Sequência atual: 4 dias
                Seu recorde: 5 dias</SubTitulo>
            </Textos>
            <Botao onClick={botaoSelecionado}
            selecionado={selecionado}> <CheckIcon/> </Botao>
        </Tarefa>
        

      </Container>

        <BottomBar/>
      </>
    )
  }
  
  export default Hoje

 

  const Data=styled.div`
    margin-left: 20px;
   `
  const TextData=styled.h1`
  font-size: 23px;
  color: #126BA5;
   `

const Container=styled.div`
  margin-top:90px ;
 
  `
  const Textos=styled.div`
   margin-top:25px ;
  `
  const Tarefa=styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
 
  `
const Principal=styled.h1`
 font-size: 20px;

`
const SubTitulo=styled.h2`
font-size: 13px;
`
const Botao=styled.button`
 height: 70px;
 width: 70px;
 border:1px;
 font-size: 35px;
 color: white;
 background-color: ${(props) => (props.selecionado ? "green" : "#E7E7E7")};
 cursor: pointer;
 border-radius: 5px ;
 
`

 