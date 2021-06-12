import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js";
import Card from './Card'


function GameBoard(props) {
    const board = []
    const cols = 8
    const rows = 5
    const w = props.width / cols
    const h = props.height /rows
    for (var r=0; r < rows; r++) {
        const row = []
        for (var c=0; c < cols; c++) {
            const card = new Card({r, c, x: c * w, y: r * h, w, h})
            row.push(card)
        }
        board.push(row)
    }
    const game = props.game
    return (
        <div className="GameBoard">
          <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
            {board}
          </Stage>
        </div>
    )
}

export default GameBoard;
