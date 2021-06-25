
function updateGameState(gameDetails, r, c) {
  const selected = gameDetails.selected
  const board = gameDetails.board
  var waitFor = undefined
  var waitAndClear = undefined
  var selected2
  if (selected === undefined) {
    board[r][c].visible = !board[r][c].visible
    selected2 = { r, c }
  } else {
    const r2 = selected['r']
    const c2 = selected['c']
    if (r === r2 && c === c2) {
      selected2 = selected
    } else {
      if (board[r][c].slug === board[r2][c2].slug) {
        board[r][c].solved = true
        board[r2][c2].solved = true
        waitAndClear = undefined
        waitFor = undefined
      } else {
        board[r][c].visible = !board[r][c].visible
        waitAndClear = { a: {r, c}, b: {r: r2, c: c2} }
        // board[r][c].visible = false
        // board[r2][c2].visible = false
        waitFor = 1000
      }
      selected2 = undefined      
    }
  }
  // TODO: show first, show second, reset
  // TODO: handle end game
  console.log({r,c, waitFor, selected2, waitAndClear})
  return { board, waitFor, selected: selected2, waitAndClear }
}

export default updateGameState