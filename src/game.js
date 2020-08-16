class Game {
    constructor(w, h) {
        this.sprites = []
        this.rows = 5
        this.cols = 8
        this.w = w
        this.h = h
        this.visible1 = null
        this.visible2 = null
    }

    resetBoard() {
        this.visible1 = null
        this.visible2 = null
    }

    updateRound() {
        var game = this
        var card1 = this.visible1
        var card2 = this.visible2
        setTimeout(function () {
            card1.texture = PIXI.Texture.fromImage('static/frame.png');
            card2.texture = PIXI.Texture.fromImage('static/frame.png');
            game.resetBoard();
        }, 1000);
    }

    clickCard(sprite, eventData) {
        // sprite.position.x += 10
        // sprite.position.y += 10
        console.log(eventData)
        if (this.visible1 == null) {
            sprite.texture = PIXI.Texture.fromImage('static/frame2.png');
            this.visible1 = sprite;
        } else if (this.visible2 == null) {
            sprite.texture = PIXI.Texture.fromImage('static/frame2.png');
            this.visible2 = sprite;
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
                sprite.on('mousedown', event => this.clickCard(sprite, event));
                stage.addChild(sprite);
                // var x = graphics.drawRect(, , , );
                // console.log(x);
                // x.on('mousedown', event => this.clickCard(r, c, event));
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
