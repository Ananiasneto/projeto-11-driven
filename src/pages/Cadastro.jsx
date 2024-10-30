import styled from "styled-components"
import Logo from "../components/Logo"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner';

function Cadastro() {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [image,setImage]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const [enviando,setEnviando]=useState(false)
  
  function criaConta(e){
    e.preventDefault()
    setEnviando(true); 
    setTimeout(() => {
      setEnviando(false);
      const Url= 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const body={email,name,image,password}

    axios.post(Url,body)
    .then(()=>{
      navigate('/')
    })
    .catch(err=>{
      alert(err.response.data.message)
    setEnviando(false)}
  )
  
    }, 2000); 
  };
    
    

    return (
      <>
    <Container>
      <Logo />
      <Form onSubmit={criaConta}>
        <Input type="email" placeholder="Email" name="email" required value={email} disabled={enviando} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Senha" name="password" required value={password} disabled={enviando} onChange={(e)=>setPassword(e.target.value)}/>
        <Input type="text" placeholder="Nome" name="nome" required value={name} disabled={enviando} onChange={(e)=>setName(e.target.value)}/>
        <Input type="text" name="foto" placeholder="Foto" required value={image} disabled={enviando} onChange={(e)=>setImage(e.target.value)} />
        <Button type="submit" disabled={enviando}>
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
          ) : 'Cadastrar'}
        </Button>
        
      </Form>
      <Enviar to='/'>Já tem uma conta? Faça login!</Enviar>
    </Container>
      </>
    )
  }
  
  export default Cadastro
  
  const Form=styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  `
  const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

    const Input=styled.input`
    height: 40px;
    color: #D4D4D4;
    border: 1px solid;
    margin-top:10px ;
    border-radius: 5px;
    margin-left: 10%;
    margin-right: 10%;
    &::placeholder {
    color: #DBDBDB;
    font-size: 15px;
    font-family: "Lexend Deca", sans-serif;
  }

`

const Button=styled.button`
 display: flex; 
  justify-content: center; 
  align-items: center; 
 height: 40px;
border: 1px; 
margin-top: 10px;
background-color:  #52B6FF;
color: #ffffff;
border-radius: 5px; 
margin-left: 10%;
margin-right: 10%;
font-family: "Lexend Deca", sans-serif;
font-size: 15px;
`
const Enviar=styled(Link)`
margin-top: 10px;
color:  #52B6FF;
font-family: "Lexend Deca", sans-serif;

`
