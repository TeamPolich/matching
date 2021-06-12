import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GameContext = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { initialBoard } = props;

  // Use State to keep the values
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [selectedCard, setSelectedCard] = useState([undefined, undefined]);

  const addNewUser = userName => {
  	console.log("hi")
    // const newUser = { id: new Date().getTime().toString(), name: userName };
    // setGameBoard(gameBoard.concat([newUser]));
  };

  // Make the context object:
  const gameContext = {
    gameBoard,
    setGameBoard,
    selectedCard,
    setSelectedCard,
    addNewUser
  };

  return <GameContext.Provider value={gameContext}>{initialBoard}</GameContext.Provider>;
};

// export const { GameContext } = GameContext;

Provider.propTypes = {
  gameBoard: PropTypes.object,
  selectedRow: PropTypes.object,
  selectedCol: PropTypes.object
};

Provider.defaultProps = {
  gameBoard: undefined,
  selectedRow: undefined,
  selectedCol: undefined
};
