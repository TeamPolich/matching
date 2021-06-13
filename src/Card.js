import { Sprite } from "react-pixi-fiber";
import bunny from "./bunny.png";
import React from "react";
import * as PIXI from "pixi.js";
import GameContext from './GameContext'

// function decrement() {
//     setState(prevState => {
//         return { ...prevState, count: prevState.count - 1 }
//     })
// }



function Card(props) {
    const gameDetails = React.useContext(GameContext)
    const board = gameDetails.board
    const updateGameState = gameDetails.updateGameState
    const setGameDetails = props.setGameDetails
    const x = props.x
    const y = props.y
    const r = props.r
    const c = props.c
    const slug = props.slug
    const visible = props.visible
    const solved = props.solved
    // const w = 100
    // const h = 15
    const props2 = {x, y, width: props.w, height: props.h}
    var texture = PIXI.Texture.from("frame.png")
    if (solved) {
        texture = PIXI.Texture.from("empty.png")
    }
    else if (visible) {
        texture = PIXI.Texture.from(slug)
    }
    const key = `c${r}${c}`
    return (
        <Sprite 
            key={key}
            texture={texture}
            interactive={true}
            pointerup={() => {
                const {board, selected} = updateGameState(gameDetails, r, c)
                setGameDetails((prevState) => ({
                  ...prevState,
                  board: board,
                  selected: selected
                }))
                // console.log({d})
            }}
            {...props2} />
    )
}

export default Card;
