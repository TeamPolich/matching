import { Stage } from "react-pixi-fiber";
import Card from './Card'
import GameContext from './GameContext'
import React, { useEffect } from "react";
// import GameContext from './GameContext'


function GameBoard(props) {
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
