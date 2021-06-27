import './App.css';
import React, { useReducer } from 'react'
import GameBoard from './GameBoard'
import reducer from './engine/reducer'
import Menu from './Menu'
import initialState from './engine/initialize'

export const GameContext = React.createContext();

function App() {
  const [mygame, dispatch] = useReducer(reducer, initialState);
  const mode = mygame.mode
  return (
    <GameContext.Provider value={{ game: mygame, dispatch }}>
      <div className="App">
        <div>
        {mode === "menu" ? <Menu /> : <GameBoard />}
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App
