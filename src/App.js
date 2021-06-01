import './App.css';
import GameBoard from './GameBoard'
import Game from './Game'
import { useContext } from "react";
import {GameContext} from "./GameContext";


function App() {
    const gameContext = useContext(GameContext);
    console.log({gameContext})
    const { gameBoard, setGameBoard, selectedCard, setSelectedCard } = gameContext;
    console.log({ gameBoard, setGameBoard })
    const game = new Game(8,5)
    // setGameBoard(game)
  const mode = 'game'
  if (mode === 'title') {
    return (
      <div className="App">
          <h1>menu</h1>
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