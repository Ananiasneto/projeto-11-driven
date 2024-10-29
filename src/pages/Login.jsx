import styled from "styled-components"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext"
import AuthContext from "../contexts/AuthContext"

function Login({token}) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
    

    function fazerLogin(e){ 
      e.preventDefault()
      const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
      const body={email,password}

      axios.post(url,body)
      .then(response => {
        setUser(response.data)
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        navigate('/hoje');
      })
      .catch(err=>alert(err.response.data.message))
    }

    return (
      <>
      <Container>
        <Logo/>
        <Form onSubmit={fazerLogin}>
        <Input type="email" placeholder="Email" name="email"  value={email} onChange={e=>setEmail(e.target.value)}/>
        <Input type="password" name='password' placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}/>
        <InputSubmit type="submit" />
        </Form>
        <Enviar to='/cadastro' >Não tem uma conta? Cadastre-se!</Enviar>
        </Container>
      </>
    )
  }
  
  export default Login
  
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
margin-right: 10%;
margin-left: 10%;
border-radius: 5px;

&::placeholder {
color: #DBDBDB;
}

`

const InputSubmit=styled.input`
 height: 40px;
border: 1px; 
margin-top: 10px;
background-color:  #52B6FF;
color: #ffffff;
border-radius: 5px; 
margin-right: 10%;
margin-left: 10%;
`
const Enviar=styled(Link)`
margin-top: 10px;
color:  #52B6FF;

`
