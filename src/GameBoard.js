import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js";
import Card from './Card'
import React, { useState, useEffect, useContext } from "react";
import GameContext from './GameContext'


function pointerup(r,c) {
    console.log("click out");
    console.log({r, c})
}

function GameBoard(props) {
    const { board } = React.useContext(GameContext)
    console.log({board})
    // const [board, setBoard] = useState(() => resetBoard(props) );
    const cards = []
    for (const row of board) {
        for (const item of row) {
            const card = new Card(item, pointerup)
            cards.push(card)
        }
    }
    useEffect(() => {
        console.log("ue")
    }, [])
    return (
        <div className="GameBoard">
          <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
            {cards}
          </Stage>
        </div>
    )
}

export default GameBoard;
