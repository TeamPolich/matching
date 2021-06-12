import './App.css';
import GameBoard from './GameBoard'
import GameContext from './GameContext'
import Game from './Game'
import React, { useState, useEffect, useContext } from "react";


function resetBoard(props) {
    const initialBoard = []
    const cols = 8
    const rows = 5
    const w = props.width / cols
    const h = props.height /rows
    for (var r=0; r < rows; r++) {
        const row = []
        for (var c=0; c < cols; c++) {
            const cardData = {r, c, x: c * w, y: r * h, w, h, }
            row.push(cardData)
        }
        initialBoard.push(row)
    }
    return initialBoard
}

function App() {
  const [mode, setMode] = useState("menu");
  const game = new Game(8,5)
  const board = resetBoard({ width: 800, height: 600 })
  if (mode === 'menu') {
    return (
      <div className="Menu">
          <h1>Matching Game</h1>
          <button onClick={() => setMode('game')} className="menu-button">Play</button>
      </div>
    );    
  } else {
    const width = 800;
    const height = 600;

function clickHandler(r, c) {
  const { board } = React.useContext(GameContext)
  console.log({board, r,c})  
}


    return (
      <div className="App">
        <GameContext.Provider value={{board, clickHandler}}>
          <GameBoard width={width} height={height} />
        </GameContext.Provider>
      </div>
    );    
  }
}

export default App;
