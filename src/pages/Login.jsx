import styled from "styled-components"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext"
import AuthContext from "../contexts/AuthContext"
import { ThreeDots } from 'react-loader-spinner';

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
    const [user,setUser]=useContext(UserContext);
    const [token,setToken]=useContext(AuthContext);
    const [enviando,setEnviando]=useState(false)

    function fazerLogin(e){ 
      e.preventDefault()
      setEnviando(true); 
      const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
      const body={email,password}

      axios.post(url,body)
      
      .then(response => {
        setUser(response.data)
        localStorage.setItem('user', JSON.stringify(response.data));
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        navigate('/hoje');
      })
      .catch(err=>{
        alert(err.response.data.message)
        setEnviando(false);
         }
    )
    }

    return (
      <>
      <Container>
        <Logo/>
        <Form onSubmit={fazerLogin}>
        <Input type="email" placeholder="Email" name="email"  value={email} disabled={enviando} onChange={e=>setEmail(e.target.value)}/>
        <Input type="password" name='password' placeholder="Senha" value={password} disabled={enviando} onChange={e=>setPassword(e.target.value)}/>
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
          ) : 'Enviar'}
        </Button>
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
  font-family: "Lexend Deca", sans-serif;
color: #DBDBDB;
}

`

const Button=styled.button`
display: flex;
align-items: center;
justify-content: center;
 height: 40px;
border: 1px; 
margin-top: 10px;
background-color:  #52B6FF;
color: #ffffff;
border-radius: 5px; 
margin-right: 10%;
margin-left: 10%;
font-family: "Lexend Deca", sans-serif;
`
const Enviar=styled(Link)`
margin-top: 10px;
color:  #52B6FF;
font-family: "Lexend Deca", sans-serif;

`
