import React, { useContext } from 'react';
import { GameContext } from './App';

function Menu() {
  const gameContext = useContext(GameContext)
  return (
    <div className="Menu">
      <h1>Matching Game</h1>
      <button onClick={() => gameContext.dispatch({'event': 'start-game'})} className="menu-button">Play</button>
    </div>
  );
}

export default Menu;

