import './App.css';
import GameBoard from './GameBoard'
import GameContext from './GameContext'
// import Game from './Game'
import React, { useState } from "react";


function resetBoard(props) {
    const initialBoard = []
    const cols = 8
    const rows = 5
    
    const oslugs = []
    while (oslugs.length < cols * rows) {
      var slug
      if (Math.random() < 0.5) {
        slug = './yoshi.png'
      } else {
        slug = './naya.png'
      }
      oslugs.push(slug)
      oslugs.push(slug)
    }
    let slugs = oslugs
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

    const w = props.width / cols
    const h = props.height /rows
    for (var r=0; r < rows; r++) {
        const row = []
        for (var c=0; c < cols; c++) {
            const s = slugs.pop()
            const cardData = {r, c, x: c * w, y: r * h, w, h, visible: false, slug: s, solved: false }
            row.push(cardData)
        }
        initialBoard.push(row)
    }
    return initialBoard
}

function updateGameState(gameDetails, r, c) {
  const selected = gameDetails.selected
  const board = gameDetails.board
  var selected2
  if (selected === undefined) {
    board[r][c].visible = !board[r][c].visible
    selected2 = { r, c }
  } else {
    const r2 = selected['r']
    const c2 = selected['c']
    console.log(board)
    console.log({a:board[r][c].slug, b:board[r2][c2].slug, r,c,r2,c2})
    if (board[r][c].slug == board[r2][c2].slug) {
      board[r][c].solved = true
      board[r2][c2].solved = true
    } else {
      board[r][c].visible = false
      board[r2][c2].visible = false      
    }
    selected2 = undefined
  }
  // TODO: show first, show second, reset
  // TODO: handle match
  // TODO: handle fail
  return { board, selected: selected2 }
}

function App() {
  const [mode, setMode] = useState("menu");
  const [gameDetails, setGameDetails] = useState(() => {
    return {
      board: resetBoard({width: 800, height: 600}),
      selected: undefined,
      updateGameState
    }
  });
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

    return (
      <div className="App">
        <GameContext.Provider value={gameDetails}>
          <GameBoard width={width} height={height} setGameDetails={setGameDetails} />
        </GameContext.Provider>
      </div>
    );    
  }
}

export default App;
