
import styled from "styled-components"
import TopBar from "../components/TopBar"
import BottomBar from "../components/BottomBar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Habitos() {
  const[name , setName]=useState('');
  const[habitosExistentes,setHabitosExistentes]=useState(null);
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [mostrar,setMostrar]=useState('');
  const [token,setToken]=useContext(AuthContext);
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
        alert("Hábito adicionado com sucesso!", res.data);
        setName('');
        setDiasSelecionados([]);
        setMostrar(''); 
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  }
  useEffect (()=>{
    if(!token){
      navigate("/")
    }
  },[])
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
      return <div>carregando ... </div>
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
  <DiaSemana selected={diasSelecionados.includes("1")} id="1" onClick={() => selecionado("1")}>D</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("2")} id="2" onClick={() => selecionado("2")}>S</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("3")} id="3" onClick={() => selecionado("3")}>T</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("4")} id="4" onClick={() => selecionado("4")}>Q</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("5")} id="5" onClick={() => selecionado("5")}>Q</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("6")} id="6" onClick={() => selecionado("6")}>S</DiaSemana>
  <DiaSemana selected={diasSelecionados.includes("7")} id="7" onClick={() => selecionado("7")}>S</DiaSemana>
</Dias>

        <Botoes>
          <BotaoCancelar onClick={fechaAba}>Cancelar</BotaoCancelar>
          <BotaoSalvar type="submit"> Salvar</BotaoSalvar>
        </Botoes>
    </AdcHabito>
    <div>
    {(habitosExistentes.length > 0) ? (
          habitosExistentes.map((habito, index) => (
            <div key={index}>{habito.name}</div>
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

const AdcHabito=styled.form`
display:${(props) => (props.mostrar==='sim' ? "flex" : "none")};
flex-direction: column;
  margin-left: 5%;
   
`
const Dias=styled.div`
  display: flex;
   
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
`;

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