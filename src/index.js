import Gameboard from "./gameboard";

const newBoard = new Gameboard();
newBoard.placeShip("torch", 5, "horizontal", 4, 5);

newBoard.checkBoard();
