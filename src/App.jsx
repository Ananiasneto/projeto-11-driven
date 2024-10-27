import React from "react";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos"


function App() {
  return (
    <>
      <GlobalStyle />
      
        {/*<Login/> <Cadastro/> */}
        <Hoje/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
`;
