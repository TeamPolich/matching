import { Stage } from "react-pixi-fiber";
import Card from './Card'
import GameContext from './GameContext'
import React, { useState, useEffect } from "react";
// import GameContext from './GameContext'


function GameBoard(props) {
    const [mode, setMode] = useState('pick-first')
    const [timeLeft, setTimeLeft] = useState(60);
    const [revealed, setRevealed] = useState({})

    useEffect(() => {
        if (!timeLeft) return;
        // save intervalId to clear the interval when the component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
            console.log('TODO: Update game board')
        }, 1000);
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [timeLeft]);


    const gameDetails = React.useContext(GameContext);
    const setGameDetails = props.setGameDetails
    const board = gameDetails.board;
    const cards = []
    for (const row of board) {
        for (const item of row) {
            const card = new Card({...item, setGameDetails})
            cards.push(card)
        }
    }
    var instruction
    if (mode === 'pick-first') {
        instruction = "Click on a card to flip it over"
    } else{
        instruction = "error"
    }
    return (
        <div className="GameBoard">
          <h1>{timeLeft}</h1>
          <p>{instruction}</p>
          <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
            {cards}
          </Stage>
        </div>
    )
}

export default GameBoard;



/*


import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { Stage, usePixiTicker } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";

const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width
};

function App() {
  const [r, setR] = useState(0)
  // const animate = useCallback((delta) => {
  //   setR((r) => r + 0.1 * delta);
  // }, []);
  // usePixiTicker(animate);
  return (
    <Stage options={OPTIONS}>
      <RotatingBunny x={r} y={height / 2} />
    </Stage>
  );
}

import { usePixiTicker } from "react-pixi-fiber";
import Bunny from "./Bunny";

// http://pixijs.io/examples/#/basics/basic.js
function RotatingBunny(props) {
  const [rotation, setRotation] = useState(0);
  const animate = useCallback((delta) => {
    setRotation((rotation) => rotation + 0.1 * delta);
  }, []);
  usePixiTicker(animate);

  return <Bunny {...props} rotation={rotation} />;
}

export default RotatingBunny;
*/

