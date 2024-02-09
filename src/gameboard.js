import Ship from "./ship";

class Gameboard {
  constructor() {
    this.size = 10;
    this.board = Array(this.size)
      .fill()
      .map(() => Array(this.size).fill(null));
    this.ships = [];
    this.allHits = [];
  }

  checkBoard() {
    console.log(this.board);
  }

  checkShips() {
    return this.ships;
  }

  shipPosition(index) {
    // Corrected typo
    const currentShip = this.ships[index];
    console.log(currentShip);
    return currentShip.position;
  }

  takeHit(x, y) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size)
      return "Invalid attack (Out of range)";

    const alreadyHit = this.allHits.some((hit) => hit.x === x && hit.y === y);
    if (alreadyHit) {
      return "Invalid attack (already attacked this tile)";
    }

    this.allHits.push({ x, y });

    const hitShip = this.ships.find((ship) =>
      ship.position.some((pos) => pos.x === x && pos.y === y)
    );
    console.log(hitShip);
    if (hitShip) {
      hitShip.takeHit();
      this.board[x][y] = "hit";
      return "Hit!";
    }
    this.board[x][y] = "miss";
    return "Miss";
  }

  allSunk() {
    const status = this.ships.every((ship) => ship.isSunk());
    if (status === true) return true;
    return false;
  }

  placeShip(name, length, alignment, x, y) {
    for (let i = 0; i < length; i++) {
      if (alignment === "horizontal") {
        if (y + i >= this.size || this.board[x][y + i] !== null) return false;
      } else if (alignment === "vertical") {
        if (x + i >= this.size || this.board[x + i][y] !== null) return false;
      }
    }

    const newShip = new Ship(name, length);
    newShip.position = [];
    for (let i = 0; i < length; i++) {
      if (alignment === "horizontal") {
        this.board[x][y + i] = newShip.shipName;
        newShip.position.push({ x, y: y + i });
      } else {
        this.board[x + i][y] = newShip.shipName;
        newShip.position.push({ x: x + i, y });
      }
    }

    this.ships.push(newShip);

    return true;
  }
}

export default Gameboard;
