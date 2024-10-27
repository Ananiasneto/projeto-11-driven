import styled from "styled-components"
import Logo from "../components/Logo"
function Cadastro() {


    return (
      <>
    <Container>
      <Logo />
      <Form action="/">
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Senha" name="password" />
        <Input type="text" placeholder="Nome" name="nome" />
        <Input type="text" name="foto" placeholder="Foto" />
        <InputSubmit type="submit" value="Cadastrar" />
      </Form>
      <Enviar href="#">Já tem uma conta? Faça login!</Enviar>
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
  }

`

const InputSubmit=styled.input`
 height: 40px;
border: 1px; 
margin-top: 10px;
background-color:  #52B6FF;
color: #ffffff;
border-radius: 5px; 
margin-left: 10%;
margin-right: 10%;
`
const Enviar=styled.a`
margin-top: 10px;
color:  #52B6FF;

`
