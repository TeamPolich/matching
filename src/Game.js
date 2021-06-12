import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunny.png";
import * as PIXI from "pixi.js";


class Game {

    constructor(w, h) {
        this.sprites = []
        this.rows = 5
        this.cols = 8
        this.w = w
        this.h = h
        this.visibleSprite1 = null
        this.visibleSprite2 = null
        this.visibleCard1 = null
        this.visibleCard2 = null
    }


    matches(card1, card2) {
        if (card1.getName() == card2.getName()) {
            return true;
        } else {
            return false;
        }
    }

    removeCard(card) {
        const r = card.getRow();
        const c = card.getColumn();
        this.board[r][c] = null;
    }

    resetBoard() {
        if (this.matches(this.visibleCard1, this.visibleCard2)) {
            this.visibleSprite1.texture = PIXI.Texture.fromImage('static/empty.png');
            this.visibleSprite2.texture = PIXI.Texture.fromImage('static/empty.png');
            this.removeCard(this.visibleCard1);
            this.removeCard(this.visibleCard2);
        } else {
            this.visibleSprite1.texture = PIXI.Texture.fromImage('static/frame.png');
            this.visibleSprite2.texture = PIXI.Texture.fromImage('static/frame.png');
        }
        this.visibleSprite1 = null;
        this.visibleSprite2 = null;
        this.visibleCard1 = null;
        this.visibleCard2 = null;
    }

    updateRound() {
        var game = this;
        console.log({aadf:"adfaf"})
        setTimeout(function () {
            game.resetBoard();
        }, 1000);
    }

    stillAvailable(card) {
        var r = card.getRow();
        var c = card.getColumn();
        if (this.board[r][c] == null) {
            return false;
        } else {
            return true;
        }
    }

    clickCard(sprite, card, eventData) {
        if (!this.stillAvailable(card)) {
            return;
        }
        var img = card.getImage();
        if (this.visibleSprite1 == null) {
            sprite.texture = PIXI.Texture.fromImage(img);
            this.visibleSprite1 = sprite;
            this.visibleCard1 = card;
        } else if (this.visibleSprite2 == null) {
            sprite.texture = PIXI.Texture.fromImage(img);
            this.visibleSprite2 = sprite;
            this.visibleCard2 = card;
            this.updateRound();
        }
    }

    onDown(item, eventData) {
        console.log("#", item)
    }

    populate(stage) {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0x555555);
        this.drawCards(stage, graphics);
        stage.addChild(graphics);
        console.log("game inner")
        //
        var sprite = PIXI.Sprite.from('static/bunny.png');
        sprite.position.set(10,10);
        sprite.interactive = true;
        sprite.on('mousedown', event => this.onDown(sprite, event));
        this.sprites.push(sprite);
        stage.addChild(sprite);
    }

    drawCards(stage, graphics) {
        graphics.lineStyle(1, 0xFF0000);
        var r = 0;
        var c = 0;
        var ro = 20;
        var co = 20;
        const box_width = this.w / this.cols;
        const box_height = this.h / this.rows;
        const p = 5;

        for (r=0; r < this.rows; r++) {
            for (c=0; c < this.cols; c++) {
                const sprite = PIXI.Sprite.from('static/frame.png');
                sprite.position.set(box_width * c + p, box_height * r + p);
                sprite.width = box_width - 2 * p;
                sprite.height = box_height - 2 * p;
                sprite.interactive = true;
                const card = this.board[r][c];
                sprite.on('mousedown', event => this.clickCard(sprite, card, event));
                stage.addChild(sprite);
            }
        }
    }

    tick() {
        if (Math.random() < 0.01) {
            // console.log("!")
            // const sound = PIXI.Sound.from('static/click.mp3');
            // sound.play();            
        }
        const move_amount = 10;
        for (const sprite of this.sprites) {
            if (Math.random() < 0.9) {
                var xadj = -1 * move_amount;
                var yadj = -1 * move_amount;
                if (Math.random() < 0.5) {
                    xadj = move_amount;
                }
                if (Math.random() < 0.5) {
                    yadj = move_amount;
                }
                var x = sprite.position.x + xadj;
                var y = sprite.position.y + yadj;
                if (x < 0) {
                    x = 0;
                }
                if (y < 0) {
                    y = 0;
                }
                if (x > this.w) {
                    x = this.w
                }
                if (y > this.h) {
                    y = this.h
                }
                sprite.position.set(x, y)                
            }
        }
    }
}

// TODO: grid of images
// TODO: clickable
// TODO: state management
 
// TODO: sound
// TODO: network

// TODO: get images from portal share

export default Game;

