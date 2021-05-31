import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import React, { useState, useEffect } from "react";
import * as PIXI from "pixi.js";


function Card(props) {
    const [visible, setVisible] = useState(false);
    const x = props.x
    const y = props.y
    const r = props.r
    const c = props.c
    const w = 100
    const h = 15
    const props2 = {x: x, y: y, width: props.w, height: props.h}
    var texture = PIXI.Texture.from("frame.png")
    console.log({visible})
    if (visible) {
        texture = PIXI.Texture.from(bunny)
    }
    return (
        <Sprite 
            texture={texture}
            interactive={true}
            pointerup={() => {
                console.log("click out");
                console.log({r, c})
                setVisible(!visible)
            }}
            {...props2} />
    )
}

export default Card;
