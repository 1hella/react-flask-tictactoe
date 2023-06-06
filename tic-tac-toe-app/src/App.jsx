import { useState } from 'react'
import './App.css'
import Board from './Board.jsx'
import logo from './assets/react-logo.png'

function App() {

  return (
    <>
        <img src={logo} width="40px"/>
        <h1>My React tic-tac-toe game</h1>
        <Board></Board>
    </>
  )
}

export default App
