import game from './game'
import initialState from './initialize'
const axios = require('axios');

const reducer = (state, action) => {
  const event = action.event
  switch (event) {
    case 'start-game':
      return {
        ...state,
        mode: 'pick-first',
        instruction: 'Click a card',
        board: game.resetBoard({width: 800, height: 600}),
        name: action.name,
        age: action.age,
        start_time: (new Date()).getTime()
    };
    case 'reset':
      return initialState;
    case 'card-click':
      const {board, mode} = state
      const {r, c} = action
      const card = board[r][c]
      const slug = card.slug
      if (mode === 'pick-first') {
        return {...state, mode: 'pick-second', revealed: {r, c, slug}, instruction: "Pick a card" }
      } else if (mode === 'pick-second') {
        if (r === state.revealed.r && c === state.revealed.c) {
          return {...state, instruction: "You've already selected that one"}
        } else if (board[r][c].solved === true) {
          return {...state, instruction: "That one's already solved"}
        } else {
          if (slug === board[state.revealed.r][state.revealed.c].slug) {
            board[r][c].solved = true
            board[state.revealed.r][state.revealed.c].solved = true
            var nmode = "win"
            var instruction = "You won!!!  Click anywhere to play again."
            for (const row of board) {
              for (const cell of row) {
                if (!cell.solved) {
                  nmode = 'pick-first'
                  instruction = "Pick a card"
                }
              }
            }
            const dur = (new Date()).getTime() - state.start_time
            const data = { name: state.name, age: state.age, dur }
            console.log({data})
            if (nmode === "win") {
              const url = 'https://por8ht9sv9.execute-api.us-east-1.amazonaws.com/api/matching/score'
              axios.post(url, data)
                .then(function(response) {
                  console.log(response.data)
                })
                .catch(function (err) {
                  console.log(err)
                })              
            }
            const out = {...state, mode: nmode, board, revealed: undefined, revealed2: undefined, instruction }
            return out
          } else {
            return { ...state,mode: 'wait', revealed2: {r, c}, instruction: "Bad luck!"}
          }
        }
      } else if (mode === 'wait') {
        return state
      } else if (mode === 'win') {
        return {...state, mode: 'pick-first', instruction: 'Click a card', board: game.resetBoard({width: 800, height: 600})};
      } else {
        console.log(`Unknown step: ${mode}`)
        return state
      }
    case 'wait-complete':
      console.log("waiting complete!")
      return {...state, mode: 'pick-first', revealed: undefined, revealed2: undefined, instruction: "Pick a card"}
    default:
      console.log(`Unknown command: ${event}`)
      return state;
  }
}

export default reducer