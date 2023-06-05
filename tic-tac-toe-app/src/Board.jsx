import { useState } from 'react'
import './Board.css'

function Board() {
  const [board, setBoard] = useState([["","",""],["","",""],["","",""]])
  const [turn, setTurn] = useState("X")

    function handleClick(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;
        if (board[row][col] === '') {
            const updatedBoard = [...board]
            updatedBoard[row][col] = turn;
            setBoard(updatedBoard);
            setTurn(turn === "X" ? "O" : "X");
        }
    }

  return (
    <>
    <h2>It's {turn}'s turn.</h2>
    {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
            <span data-row={rowIndex} data-col={cellIndex} key={cellIndex} onClick={handleClick} className="cell">{cell}</span>
        ))}
        </div>
    ))}
    </>
  )
}

export default Board
