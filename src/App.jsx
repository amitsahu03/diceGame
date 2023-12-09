import { useState } from 'react'

import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {
  const[isGameStarted , setISGameStarted]=useState(true)

  const toggleGame = () =>{
    setISGameStarted((prev)=>!prev)
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> :<StartGame toggle = {toggleGame}/>

    }
      
    </>
  )
}

export default App
