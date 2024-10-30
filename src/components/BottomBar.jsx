import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function Bottombar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [selected, setSelected] = useState(location.pathname === "/Habitos" ? "habitos" : "calendario");

  useEffect(() => {
    if (selected === "habitos") {
      navigate("/Habitos");
    } else if (selected === "calendario") {
      navigate("/Hoje");
    }
  }, [selected, navigate]);

  return (
    <Barra>
      <HabitoSelecao
        selected={selected}
        onClick={() => setSelected("habitos")}
      >
        <CalendarMonthIcon /> Hábitos
      </HabitoSelecao>
      <Calendario
        selected={selected}
        onClick={() => setSelected("calendario")}
      >
        <EventAvailableIcon /> Hoje
      </Calendario>
    </Barra>
  );
}

export default Bottombar;

const Barra = styled.div`
  background-color: #126ba5;
  color: white;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1;
`;

const HabitoSelecao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.selected === "habitos" ? "#126ba5" : "white")};
  color: ${(props) => (props.selected === "habitos" ? "white" : "#888")};
  cursor: pointer;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
`;

const Calendario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.selected === "calendario" ? "#126ba5" : "white")};
  color: ${(props) => (props.selected === "calendario" ? "white" : "#888")};
  cursor: pointer;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
`;
