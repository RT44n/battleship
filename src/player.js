import Gameboard from "./gameboard";

class Player {
  constructor(name = "computer") {
    this.playerName = name;
    this.playerBoard = new Gameboard();
  }

  hit(x, y) {
    this.playerBoard.takeHit(x, y);
  }

  randomHit() {
    this.playerBoard.randomAttack();
  }

  hasLost() {
    return this.playerBoard.allSunk();
  }

  placeShip() {
    this.playerBoard.placeShipRandom();
  }

  showBoard() {
    return this.playerBoard.checkBoard();
  }
}

export default Player;
