import './App.css';
import GameBoard from './GameBoard'
import Game from './Game'
import { useState } from "react";
import {GameContext} from "./GameContext";


function App() {
    const [mode, setMode] = useState("menu");
    const game = new Game(8,5)
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
        <GameBoard game={game} width={width} height={height} />
      </div>
    );    
  }
}

export default App;

/*
const app = new PIXI.Application({
    width: w, height: h, 
    backgroundColor: 0x333333, 
    resolution: window.devicePixelRatio || 1,
});

const displayDiv = document.querySelector('#display')
displayDiv.appendChild(app.view);

card = new Card(null, null);

game = new Game(w, h)
game.populate(app.stage)

app.ticker.add((delta) => {
    game.tick();
});

*/