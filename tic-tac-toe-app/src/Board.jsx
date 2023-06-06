import { useState } from 'react'
import './Board.css'
import Controls from './Controls.jsx'

function Board() {
    const [board, setBoard] = useState([["","",""],["","",""],["","",""]])
    const [turn, setTurn] = useState("X")
    const [status, setStatus] = useState(`It's ${turn}'s turn`)

    function handleClick(event) {
        if (getWin(turn)) {
            return;
        }

        const row = event.target.dataset.row;
        const col = event.target.dataset.col;

        if (getDraw()) {
            setStatus("It's a draw.")
            return;
        }

        if (board[row][col] === '') {
            const updatedBoard = [...board]
            updatedBoard[row][col] = turn;
            setBoard(updatedBoard);
            if (getWin(turn)) {
                setStatus(`${turn} won!`)
            } else if (getDraw()) {
                setStatus("It's a draw.")
            }else {
                setTurn(turn === "X" ? "O" : "X");
                setStatus(`It's ${turn}'s turn`)
            }
        }
    }

    function handleReset() {
        setBoard([["","",""],["","",""],["","",""]])
        setTurn("X")
        setStatus(`It's ${turn}'s turn`)
    }

    function getWin(piece) {
        return
            //  crosses
                (board[0][0] === piece && board[1][1] === piece && board[2][2] === piece)
            ||  (board[0][2] === piece && board[1][1] === piece && board[2][0] === piece)
            //  verticals
            ||  (board[0][0] === piece && board[1][0] === piece && board[2][0] === piece)
            ||  (board[0][1] === piece && board[1][1] === piece && board[2][1] === piece)
            ||  (board[0][2] === piece && board[1][2] === piece && board[2][2] === piece)
            //  horizontals
            ||  (board[0][0] === piece && board[0][1] === piece && board[0][2] === piece)
            ||  (board[1][0] === piece && board[1][1] === piece && board[1][2] === piece)
            ||  (board[2][0] === piece && board[2][1] === piece && board[2][2] === piece)
    }

    function getDraw() {
        for (const row of board) {
            console.log(row)
            if (row.some(cell => cell === '')) {
                return false;
            }
        }
        return true;
    }

    return (
        <>
        <h2>{status}</h2>
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
                <span data-row={rowIndex} data-col={cellIndex} key={cellIndex} onClick={handleClick} className="cell">{cell}</span>
            ))}
            </div>
        ))}
        <Controls handleReset={handleReset}/>
        </>
    )
}

export default Board
