
import styled from "styled-components";

const RoleDice =({roleDice,currentDice})=>{
    
   


    return(
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`image/dice_${currentDice}.png`} />
        </div>
        <p>Click to dice Roll</p>
    </DiceContainer>
    )
}
export default RoleDice;
const DiceContainer=styled.div`
display: flex;
flex-direction: column;
margin-top:48px;
justify-content: center;
align-items: center;

p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;