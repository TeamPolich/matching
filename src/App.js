import './App.css';
import GameBoard from './GameBoard'
import GameContext from './GameContext'
import game from './engine/game'
// import reducer from './engine/reducer'
import Menu from './Menu'
import React, { useContext, useReducer } from "react";

const reducer = (state, action) => {
  console.log({state, action})
  if (action.mode) {
    console.log(action.mode)
    state.mode = action.mode
  }
  return state
};

const initialState = {
  mode: "menu"
};

console.log({reducer, Menu,  GameBoard})


function App() {
  const MyGameContext = useContext(GameContext)
  const [state, dispatch] = useReducer(reducer, {mode: "menu"})

  const mode = MyGameContext.mode
  console.log({state, dispatch, MyGameContext})
          // { mode == 'menu' ? <Menu /> : <GameBoard /> }
  if (mode === 'menu') {
    let start = () => {
      dispatch( { mode: "pick-first" } )
    }
    return (
      <GameContext.Provider value={{ state, dispatch }} >
        <div className="Menu">
            <h1>Matching Game</h1>
            <button onClick={start} className="menu-button">Play</button>
        </div>
      </GameContext.Provider>
    );    
  }
  return (
    <MyGameContext.Provider value={{ state, dispatch }} >
      <div className="App">
        <Menu />
      </div>
    </MyGameContext.Provider>
  );    
}


export default App;
