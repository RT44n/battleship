// Create userPlayer and enemy player
// start taking hits. switch  after every hit
// check for winner after every hit

import Player from "./player";

const gameController = () => {
  const playerName = prompt("whats your name?");

  const player1 = new Player(playerName);
  player1.placeShip();

  const player2 = new Player();
  player2.placeShip();

  let currentPlayer = player1;

  const switchPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  };

  currentPlayer.randomHit();
  currentPlayer.showBoard();
  switchPlayer();
  currentPlayer.randomHit();
  currentPlayer.showBoard();
};

export default gameController;
