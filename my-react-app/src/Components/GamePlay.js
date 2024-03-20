import React from "react";
import TotalScore from "./TotalScore";
import NumberSelecter from "./NumberSelecter";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setselectedNumber] = useState();
    const [currentDice, setcurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules,setshowRules]=useState(false);
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }


    const roleDice = () => {
        if (!selectedNumber) {
            setError("Error");
            return
        }



        const randomNumber = generateRandomNumber(1, 7);
        setcurrentDice((prev) => randomNumber);


        if (selectedNumber == randomNumber) {
            setScore(prev => prev + randomNumber)
        }
        else {
            setScore(prev => prev - 2)
        }
        setselectedNumber(undefined)
    }
    const resetScore = () => {
        setScore(0);
    }
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelecter error={error} setError={setError} selectedNumber={selectedNumber}
                    setselectedNumber={setselectedNumber} />
            </div>
            <RoleDice currentDice={currentDice}
                roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={()=>{setshowRules((prev)=>!prev)}}>{showRules ? "Hide " : "Show "}
                    Rules</Button>
            </div>
            { showRules &&  <Rules />}
        </MainContainer>
    )
}
export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-around;
    
    align-items: end;
}
.btns{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    }
`;