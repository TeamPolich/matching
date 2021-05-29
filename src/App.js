import { render } from "react-dom";
import React, { useReducer, useRef, useTick } from 'react';
import { Sprite, Stage } from "react-pixi-fiber";
import { Container, Texture } from '@pixi/display';
import bunny from "./bunny.png";
import * as PIXI from "pixi.js";

function Bunny(props) {
  return <Sprite texture={PIXI.Texture.from(bunny)} {...props} />;
}

function App() {

    return (
        <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
          <Bunny x={200} y={200} />
        </Stage>
    )
}

export default App;
