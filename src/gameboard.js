import Ship from "./ship";
import randomTile from "./helpers";

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

  randomAttack() {
    const attackTiles = randomTile();
    const x = attackTiles[0];
    const y = attackTiles[1];

    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      this.randomAttack();
    }

    const alreadyHit = this.allHits.some((hit) => hit.x === x && hit.y === y);
    if (alreadyHit) {
      this.randomAttack();
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

  placeShipRandom() {
    const shipNames = [
      "Carrier",
      "Battleship",
      "Cruiser",
      "Submarine",
      "Destroyer",
    ];
    const shipLengths = [5, 4, 3, 3, 2];
    const alignments = ["horizontal", "vertical"];

    for (let i = 0; i < shipNames.length; i++) {
      let placed = false;

      while (!placed) {
        const name = shipNames[i];
        const length = shipLengths[i];
        const alignment = alignments[Math.floor(Math.random() * 2)]; // Randomly choose horizontal or vertical
        const x = Math.floor(Math.random() * this.size);
        const y = Math.floor(Math.random() * this.size);

        if (this.placeShip(name, length, alignment, x, y)) {
          placed = true;
        }
      }
    }
  }
}

export default Gameboard;
