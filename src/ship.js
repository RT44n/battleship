class Ship {
  constructor(shipName, shipLength) {
    this.shipName = shipName;
    this.shipLength = shipLength;
    this.hit = 0;
    this.sunk = false;
    this.position = [];
  }

  // eslint-disable-next-line consistent-return
  takeHit() {
    if (this.sunk === true) {
      return "Ship already sunk. Can't hit again";
    }
    this.hit += 1;
    this.checkShip();
    return this.sunk ? "Ship sunk!" : "Hit successful!";
  }

  hits() {
    return this.hit;
  }

  checkShip() {
    if (this.hit === this.shipLength) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}

export default Ship;
