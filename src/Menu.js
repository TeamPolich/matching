import React, { useContext, useState } from 'react';
import { GameContext } from './App';

function Menu() {
  const gameContext = useContext(GameContext)
  const [name, setName] = useState("")
  const [age, setAge] = useState(18)
  const disabled = name.length < 2 || age <= 0 || age > 100
  return (
    <div className="Menu">
      <br/>
      <img src="https://radioactivemosquito.com/logo.jpg" />
      <h1>Matching Game</h1>
      <center>
        <p>Thanks for being a playtester.</p>
        <p>We are going to track your progress in order to help us set the difficulty level for the game.</p>
        <p>Please enter your name and age so we can track if the difficulty should change by age.</p>
        <table>
          <tr><td>Name</td><input value={name} onChange={ e => setName(e.target.value) } /></tr>
          <tr><td>Age</td><input value={age} onChange={ e => setAge(e.target.value) } /></tr>
        </table>
      </center>
      <br/>
      <button disabled={disabled} onClick={() => gameContext.dispatch({'event': 'start-game', name, age})} className="menu-button">Play</button>
    </div>
  );
}

export default Menu;

