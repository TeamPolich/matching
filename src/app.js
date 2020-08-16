const w = 800;
const h = 600;

const app = new PIXI.Application({
    width: w, height: h, 
    backgroundColor: 0x333333, 
    resolution: window.devicePixelRatio || 1,
});

const displayDiv = document.querySelector('#display')
displayDiv.appendChild(app.view);

game = new Game(w, h)
game.populate(app.stage)

app.ticker.add((delta) => {
    game.tick();
});


