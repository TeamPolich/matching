import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js";


function Card(props) {
    const w = 100
    const h = 15
    const props2 = {x: props.x, y: props.y, width: props.w, height: props.h}
    return (
        <Sprite texture={PIXI.Texture.from(bunny)} {...props2} />
    )
}

export default Card;
