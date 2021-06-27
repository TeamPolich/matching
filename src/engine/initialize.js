import game from './game'

const initialState = { mode: 'menu', instruction: 'Click play to begin', board: game.resetBoard({width: 800, height: 600}) }

export default initialState