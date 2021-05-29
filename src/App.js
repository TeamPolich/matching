import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import logo from './logo.svg';
import './App.css';
import * as PIXI from "pixi.js";

function App() {
  const props = {x:200, y:200}
  return (
    <div className="App">
  <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
  <Sprite texture={PIXI.Texture.from(bunny)} {...props} />
  </Stage>
    </div>
  );
}

export default App;
