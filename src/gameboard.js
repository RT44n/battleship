import Ship from "./ship";

class Gameboard {
  constructor() {
    this.size = 10;
    this.board = Array(this.size)
      .fill()
      .map(() => Array(this.size).fill(false));
    this.ships = [];
  }

  checkBoard() {
    console.log(this.board);
  }

  checkShips() {
    return this.ships;
  }

  shipPostion() {
    return this.ships[0];
  }

  placeShip(name, length, alignment, x, y) {
    // Check if the ship placement is valid

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      if (alignment === "horizontal") {
        // horizonatal alignment
        if (y + i >= this.size || this.board[x][y + i]) return false;
        // vertical alignment
      } else if (x + i >= this.size || this.board[x + i][y]) return false;
    }

    // Create and place the ship
    const newShip = new Ship(name, length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      if (alignment === "horizontal") {
        this.board[x][y + i] = true;
        newShip.position.push({ x, y: y + i });
      } else {
        // Assuming vertical alignment
        this.board[x + i][y] = true;
        newShip.position.push({ x: x + i, y });
      }
    }

    // Add the ship to the list of ships
    this.ships.push(newShip);

    return true; // Indicate successful placement
  }
}

export default Gameboard;
