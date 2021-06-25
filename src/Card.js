import { Sprite } from "react-pixi-fiber";
import React, { useState } from "react";
import * as PIXI from "pixi.js";
import GameContext from './GameContext'

// function decrement() {
//     setState(prevState => {
//         return { ...prevState, count: prevState.count - 1 }
//     })
// }



function Card(props) {
    const [mode, setMode] = useState();
    const [revealed, setRevealed] = useState({})
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
                if (mode === 'pick-first') {
                    setRevealed({r, c, slug})
                    setMode('pick-second')
                }
                const {board, selected, waitUntil, waitAndClear} = updateGameState(gameDetails, r, c)
                setGameDetails((prevState) => ({
                  board: board,
                  selected: selected,
                  updateGameState: prevState.updateGameState, 
                  waitUntil,
                  waitAndClear
                }))
            }}
            {...props2} />
    )
}

export default Card;
