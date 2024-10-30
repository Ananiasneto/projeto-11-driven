import React, { useState } from "react";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserContext from "./contexts/UserContext";
import AuthContext from "./contexts/AuthContext";

function App() {
  const[token,setToken]=useState(localStorage.getItem("token"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <AuthContext.Provider value={[token,setToken]}>
    <UserContext.Provider value={[user,setUser]}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login /> }/> 
        <Route path="/cadastro" element={<Cadastro/> }/> 
        <Route path="/hoje" element={<Hoje />}/> 
        <Route path="/habitos" element={<Habitos/>}/> 
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </AuthContext.Provider>
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
