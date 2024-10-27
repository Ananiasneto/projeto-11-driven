
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function Bottombar() {
  const [selected, setSelected] = useState("habitos");

  return (
    <>
      <Barra>
        <HabitoSelecao to="/Habitos"
          selected={selected === "habitos"}
          onClick={() => setSelected("habitos")}
        >
          <CalendarMonthIcon/> Hábitos
        </HabitoSelecao>
        <Calendario to="/Hoje"
          selected={selected === "calendario"}
          onClick={() => setSelected("calendario")}
        >
          <EventAvailableIcon/> Hoje
        </Calendario>
      </Barra>
    </>
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

const HabitoSelecao = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#126ba5" : "white")};
  color: ${(props) => (props.selected ? "white" : "#888")};
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;

 
`;

const Calendario = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
    width: 50%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#126ba5" : "white")};
  color: ${(props) => (props.selected ? "white" : "#888")};
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
`;