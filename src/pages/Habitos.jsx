
import styled from "styled-components"
import TopBar from "../components/TopBar"
import BottomBar from "../components/BottomBar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import { ThreeDots } from 'react-loader-spinner';

function Habitos() {
  const[name , setName]=useState('');
  const[habitosExistentes,setHabitosExistentes]=useState(null);
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [mostrar,setMostrar]=useState('');
  const [enviando,setEnviando]=useState(false)
  const [token,setToken]=useContext(AuthContext);
  const [user,setUser]=useContext(UserContext);
  const navigate=useNavigate();

  function adicionaHabito(){
    if(!mostrar){
      setMostrar('sim')
    }else{
    setMostrar('');
  }}
  function selecionado(id) {
    if (diasSelecionados.includes(id)) {
      setDiasSelecionados(diasSelecionados.filter(dia => dia !== id));
    } else {
      setDiasSelecionados([...diasSelecionados, id]);
    }
  }
  function fechaAba() {
    setMostrar('');
  }
  function criarHabito(e) {
    e.preventDefault()
    setEnviando(true); 
    setTimeout(() => {
      setEnviando(false); 
      const config={
        headers:{
          Authorization: `Bearer ${token}`
        }
       
      }
       const Url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
       const body={ name: name,
        days: diasSelecionados}
        axios.post(Url, body, config)
        .then(res => {
          setName('');
          setDiasSelecionados([]);
          setMostrar(''); 
        })
        .catch(err => {
          alert(err.response.data.message);
          setEnviando(true); 
        });
    }, 2000); 
    
  }
  useEffect (()=>{
    if(!token){
      navigate("/")
    }

  },[navigate])

  useEffect (()=>{
    const Url="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    const config={
      headers:{
        Authorization: `Bearer ${token}`
      }
    }


    axios.get(Url,config)
    .then(res=>setHabitosExistentes(res.data))
    .catch(err=>alert(err.response.data.message))

  },[habitosExistentes])
  if (habitosExistentes===null){
      return <Carregando><ThreeDots
      visible={true}
      height="60"
      width="60" 
      color="#52B6FF"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    /></Carregando>
  }

  return (
    <>
    <TopBar/>
    <Container>
    <Habito>
        <TextHabito>Meus habitos</TextHabito>
        <Botao onClick={adicionaHabito}>+</Botao>
    </Habito>
    <AdcHabito mostrar={mostrar} onSubmit={criarHabito}> 
        <Input type="text" placeholder="Nome do habito " value={name} required onChange={(e)=>setName(e.target.value)}/>
        <Dias>
  <DiaSemana selected={diasSelecionados.includes("7")}  disabled={enviando} onClick={() => selecionado("7")}>D</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("1")}  disabled={enviando} onClick={() => selecionado("1")}>S</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("2")} disabled={enviando} onClick={() => selecionado("2")}>T</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("3")} disabled={enviando} onClick={() => selecionado("3")}>Q</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("4")}  disabled={enviando} onClick={() => selecionado("4")}>Q</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("5")}  disabled={enviando} onClick={() => selecionado("5")}>S</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("6")}  disabled={enviando} onClick={() => selecionado("6")}>S</DiaSemana>
</Dias>

        <Botoes>
          <BotaoCancelar disabled={enviando} onClick={fechaAba}>Cancelar</BotaoCancelar>
          <BotaoSalvar type="submit" disabled={enviando}>
          {enviando ? (
            <ThreeDots
              visible={true}
              height="30"
              width="30" 
              color="#FFFFFF"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : 'Salvar'}
        </BotaoSalvar>
        </Botoes>
        
    </AdcHabito>
    <div>
    {(habitosExistentes.length > 0) ? (
          habitosExistentes.map((habito, index) => (
            <Adicionado key={index}>
              <TexthabitoAdc>{habito.name}</TexthabitoAdc>
              <Dias>
              <DiaSemana selected={habito.days.includes(7)}  >D</DiaSemana>
              <DiaSemana selected={habito.days.includes(1)} >S</DiaSemana>
              <DiaSemana selected={habito.days.includes(2)} >T</DiaSemana>
              <DiaSemana selected={habito.days.includes(3)}  >Q</DiaSemana>
              <DiaSemana selected={habito.days.includes(4)} >Q</DiaSemana>
              <DiaSemana selected={habito.days.includes(5)} >S</DiaSemana>
              <DiaSemana selected={habito.days.includes(6)} >S</DiaSemana>
            </Dias> 
            </Adicionado>
          ))
        ) : (
          <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        )}
    </div>
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
 margin-bottom: 5%;
  `

const TextHabito=styled.div`
font-size: 23px;
font-weight: 400;
 
color:#126BA5;
 
  `
  const Carregando=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
   
    `
const Input=styled.input`
  height: 45px;
  width: 90% ;
  color: #D4D4D4;
  border: 1px solid;
  border-radius: 5px;
  &::placeholder {
  color: #DBDBDB;
  font-family: "Lexend Deca", sans-serif;
} `

const AdcHabito=styled.form`
display:${(props) => (props.mostrar==='sim' ? "flex" : "none")};
flex-direction: column;
  margin-left: 5%;
   
`
const Dias=styled.div`
  display: flex;
   
`
const TexthabitoAdc=styled.h1`
font-size: 23px;
color:#666666;
font-family: "Lexend Deca", sans-serif; 
 
  `
 const Adicionado=styled.div`
   margin-left: 5%;
 `

const Botoes=styled.div`
display: flex;
justify-content: flex-end;
  margin-right: 10%;
  gap: 5%;
  margin-top:5% ;
`

const BotaoCancelar=styled.button`

font-family: "Lexend Deca", sans-serif;
color:#52B6FF ;
font-size: 20px;
border : none;
`
const BotaoSalvar=styled.button`
display: flex;
font-family: "Lexend Deca", sans-serif;
justify-content: center;
width: 84px;
color:#FFFFFF ;
font-size: 20px;
background-color: #52B6FF;
border: none;
border-radius:5px;


  
   
`
const DiaSemana = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: 1px #d4d4d4 solid;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  background-color:${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  cursor: pointer;
  border-radius: 5px;
`;

const Container=styled.div`
  margin-top:90px ;

`
const Botao=styled.button`
display: flex;
justify-content: center;
font-family: "Lexend Deca", sans-serif;
 font-size: 27px;
 background-color: #52B6FF;
 color: #FFFFFF;
 height: 35px;
 width: 40px;
 border: none;
 border-radius: 5px;

  `
  const  Text=styled.h1`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  color: #666666;
  margin-right:5%;
margin-left: 5%;
line-height: 23px;
 
  `