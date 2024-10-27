import styled from "styled-components"
import Logo from "../components/Logo"
function Login() {


    return (
      <>
      <Container>
        <Logo/>
        <Form action="/">
        <Input type="email" placeholder="Email" name="" id="" />
        <Input type="password" placeholder="Senha"/>
        <InputSubmit type="submit" />
        </Form>
        <Enviar href="">Não tem uma conta? Cadastre-se!</Enviar>
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
const Enviar=styled.a`
margin-top: 10px;
color:  #52B6FF;

`
