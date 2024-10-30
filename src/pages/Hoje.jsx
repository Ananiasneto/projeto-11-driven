import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react"; 
import TopBar from "../components/TopBar"
import BottomBar from "../components/BottomBar"
import CheckIcon from '@mui/icons-material/Check';
import AuthContext from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');
function Hoje() {
    const [selecionado, setSelecionado] = useState([]); 
    const[habitosExistentes,setHabitosExistentes]=useState([]);
    const [token,setToken]=useContext(AuthContext)
    const navigate=useNavigate()
    const dataAtual = dayjs();
    const diaMes = dataAtual.format('DD/MM');
    const diaSemana = dataAtual.format('dddd');
   
    

   

    useEffect (()=>{
      if(!token){
        navigate("/")
        alert("faça login novamente")
      }else{
        const Url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
  
      const config={
        headers:{
          Authorization: `Bearer ${token}`
        }

      }
    

    axios.get(Url,config)
    .then(res => {
      setHabitosExistentes(res.data)
    })
    .catch(err => alert(err.response.data.message));
  }

    },[])
    
    function AtualizaPag(){
          const Url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    
        const config={
          headers:{
            Authorization: `Bearer ${token}`
          }
  
        }
      axios.get(Url,config)
      .then(res => {
        setHabitosExistentes(res.data)
      })
      .catch(err => alert(err.response.data.message));
    }

    function botaoSelecionado(id,done) {
      
      if (done===true) {
        setSelecionado(selecionado.filter((item) => item !== id));
        
        const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const body = {};
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    
        axios.post(Url, body, config)
          .then((response) => {
            console.log("Hábito desmarcado com sucesso:", response.data);
            AtualizaPag();
          })
          .catch((err) => alert(err.response.data.message));
    
      } else {
        setSelecionado([...selecionado, id]);
    
        const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const body = {};
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    
        axios.post(Url, body, config)
          .then((response) => {
            console.log("Hábito marcado com sucesso:", response.data);
            AtualizaPag();
          })
          .catch((err) => alert(err.response.data.message));
      }
      
      
    }
    

    return (
      <>
      <TopBar/>
      <Container>
      <Data>
        <TextData>{diaSemana} , {diaMes}</TextData>
    </Data>
       {habitosExistentes.map((habitos, index) => (
        <Tarefa key={index}>
            <Textos>
                <Principal>{habitos.name}</Principal>
                <SubTitulo>Sequência atual: {habitos.currentSequence} <br />
                Seu recorde: {habitos.highestSequence}</SubTitulo>
                
            </Textos>
            <Botao onClick={()=>botaoSelecionado(habitos.id,habitos.done)}
            selecionado={habitos.done}> <CheckIcon/> </Botao>
        </Tarefa>
       ))} 
        

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
   font-family: "Lexend Deca", sans-serif;
  font-size: 23px;
  color: #126BA5;
   `

const Container=styled.div`
  margin-top:90px ;
 
  `
  const Textos=styled.div`
   padding-top:25px ;
  `
  const Tarefa=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
 
  `
const Principal=styled.h1`
font-family: "Lexend Deca", sans-serif;
color: #666666;
 font-size: 20px;

`
const SubTitulo=styled.h2`
font-family: "Lexend Deca", sans-serif;
font-size: 13px;
color: #666666;
`
const Botao=styled.button`
 height: 70px;
 width: 70px;
 border:1px;
 font-size: 35px;
 color: white;
 background-color: ${(props) => (props.selecionado ?  "green":"#E7E7E7" )};
 cursor: pointer;
 border-radius: 5px ;
 margin-top:20px;
 
`

 