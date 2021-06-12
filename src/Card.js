import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import React, { useState, useEffect, useContext } from "react";
import * as PIXI from "pixi.js";
import GameContext from './GameContext'

// function decrement() {
//     setState(prevState => {
//         return { ...prevState, count: prevState.count - 1 }
//     })
// }



function Card(props) {
    const { clickHandler } = React.useContext(GameContext)
    const visible = false
    const x = props.x
    const y = props.y
    const r = props.r
    const c = props.c
    const w = 100
    const h = 15
    const props2 = {x: x, y: y, width: props.w, height: props.h}
    var texture = PIXI.Texture.from("frame.png")
    if (visible) {
        texture = PIXI.Texture.from(bunny)
    }
    return (
        <Sprite 
            texture={texture}
            interactive={true}
            pointerup={() => {
                clickHandler(r,c)
            }}
            {...props2} />
    )
}

export default Card;
