import React, { useState } from "react";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const[token,setToken]=useState(localStorage.getItem("token"))
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login setToken={setToken}/> }/> 
        <Route path="/cadastro" element={<Cadastro/> }/> 
        <Route path="/hoje" element={<Hoje token={token}/>}/> 
        <Route path="/habitos" element={<Habitos token={token}/>}/> 
        </Routes>
    </BrowserRouter>
  )
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
