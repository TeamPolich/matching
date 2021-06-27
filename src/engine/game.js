function resetBoard(props) {
    const initialBoard = []
    const cols = 8
    const rows = 5
    
    const allCards = []
    const slugs = ['./yoshi.png', './naya.png', './noah.jpeg', './luke.jpg', './kyle.png']
    while (allCards.length < cols * rows) {
      const index = Math.floor(slugs.length * Math.random());
      var slug = slugs[index]
      allCards.push(slug)
      allCards.push(slug)
    }
    let randomizedCards = allCards
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)

    const w = props.width / cols
    const h = props.height /rows
    for (var r=0; r < rows; r++) {
        const row = []
        for (var c=0; c < cols; c++) {
            const s = randomizedCards.pop()
            const cardData = {r, c, x: c * w, y: r * h, w, h, slug: s, solved: false }
            row.push(cardData)
        }
        initialBoard.push(row)
    }
    return initialBoard
}

const game = {resetBoard}

export default game