
import './App.css';
import styled from "styled-components";
import StartGame from './Components/StartGame';
import { useState } from 'react';
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStarted,setsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {
      isGameStarted ? <GamePlay />: <StartGame 
      toggle={toggleGamePlay}
      />
    }
   
    </>
  );
}

export default App;
const Button =styled.button`
background-color:black;
color:white;
padding:10px;
`;