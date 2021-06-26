import React, { useContext } from 'react';
import { GameContext } from './App';
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";


function Card(props) {
    const gameContext = useContext(GameContext)
    const { revealed, revealed2, board } = gameContext.game
    const x = props.x
    const y = props.y
    const r = props.r
    const c = props.c
    var visible = false
    if (revealed && revealed.r === r && revealed.c === c) {
        visible = true
    }
    if (revealed2 && revealed2.r === r && revealed2.c === c) {
        visible = true
    }
    if (board[r][c].solved) {
        visible = true
    }
    const slug = props.slug
    const solved = props.solved
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
            pointerup={() => gameContext.dispatch({'event': 'card-click', r, c})}
            // pointerup={() => {
            //     if (mode === 'pick-first') {
            //         setRevealed({r, c, slug})
            //         setMode('pick-second')
            //     }
            //     const {board, selected, waitUntil, waitAndClear} = updateGameState(gameDetails, r, c)
            //     setGameDetails((prevState) => ({
            //       board: board,
            //       selected: selected,
            //       updateGameState: prevState.updateGameState, 
            //       waitUntil,
            //       waitAndClear
            //     }))
            // }}
            {...props2} />
    )
}

export default Card;
