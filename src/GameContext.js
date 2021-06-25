import React from 'react';

function resetBoard(props) {
    const initialBoard = []
    const cols = 8
    const rows = 5
    
    const oslugs = []
    while (oslugs.length < cols * rows) {
      var slug
      if (Math.random() < 0.5) {
        slug = './yoshi.png'
      } else {
        slug = './naya.png'
      }
      oslugs.push(slug)
      oslugs.push(slug)
    }
    let slugs = oslugs
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

    const w = props.width / cols
    const h = props.height /rows
    for (var r=0; r < rows; r++) {
        const row = []
        for (var c=0; c < cols; c++) {
            const s = slugs.pop()
            const cardData = {r, c, x: c * w, y: r * h, w, h, visible: false, slug: s, solved: false }
            row.push(cardData)
        }
        initialBoard.push(row)
    }
    return initialBoard
}

const GameContext = React.createContext({
	mode: "menu",
	board: resetBoard({width: 800, height: 600}),
	selected: undefined
});

  // const [gameDetails, setGameDetails] = useState({
  // });


export default GameContext;
