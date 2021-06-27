import './GameBoard.css';
import { Stage } from "react-pixi-fiber";
import Card from './Card'
import { GameContext } from './App';
import React, { useContext, useEffect } from "react";


function GameBoard() {
  const gameContext = useContext(GameContext)
  const {mode, board, instruction} = gameContext.game

    useEffect(() => {
        if (mode === 'wait') {
            console.log("useEffect")
            // save intervalId to clear the interval when the component re-renders
            const intervalId = setInterval(() => {
                console.log('TODO: Update game board')
                gameContext.dispatch({'event': 'wait-complete'})
            }, 1000);
            // clear interval on re-render to avoid memory leaks
            return () => clearInterval(intervalId);
        }
    }, [mode, gameContext]);

    const cards = []
    for (const row of board) {
        for (const item of row) {
            const card = new Card({...item})
            cards.push(card)
        }
    }
    return (
        <div className="GameBoard">
          <h1>hi</h1>
          <p>{instruction}</p>
          <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
            {cards}
          </Stage>
        </div>
    )
}

export default GameBoard;

