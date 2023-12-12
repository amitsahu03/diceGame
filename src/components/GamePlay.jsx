import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector '
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/button'
import Rules from './Rules'

const GamePlay = () => {
  const[error , setError] = useState()
  const[score,setScore]= useState(0)
  const[SelectedNumber,setSelectedNumber]=useState()
  const [currentDice, setCurrentDice] =useState(1);
  const [showRules,SetShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max-min) + min));

    return Math.floor(Math.random() * (max-min) + min);
    
   };
   const roleDice = ()=>{
    const randomNumber = generateRandomNumber(1,7)
    // setCurrentDice((prev)=>randomNumber)
    if(!SelectedNumber){
      setError("You have not selected any number")
      return
    }
    else{
      setError("")
      setCurrentDice((prev)=>randomNumber)
    }

    if (SelectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber)
     }
     else{
      setScore((prev)=>prev-2)
     }
     setSelectedNumber(undefined)
   }
   const resetScore =()=>{
    setScore(0)
   }
   const rules =()=>{
    SetShowRules((prev)=>!prev)
   }
   
  return (
   
    <MainContainer><div className='top_section'>
        <TotalScore score ={score}/>
    <NumberSelector 
    error = {error}
    setError = {setError}
     SelectedNumber = {SelectedNumber} 
     setSelectedNumber ={setSelectedNumber}/>
     </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className='buttons'>
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={rules}>{!showRules ? 'Show' :'Hide'} Rules</Button>
    </div>
    <div >
      {showRules && <Rules/> }
    </div>
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
    .buttons{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      
    }
    
    
`