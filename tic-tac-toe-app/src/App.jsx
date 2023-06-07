import { useState } from 'react'
import './App.css'
import Board from './Board.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
        <Nav />
        <h1>My React tic-tac-toe game</h1>
        <Board />
        <Footer />
    </>
  )
}

export default App
