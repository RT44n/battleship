class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }

  // eslint-disable-next-line consistent-return
  takeHit() {
    if (this.sunk === true) {
      return "Ship already sunk. Can't hit again";
    }
    this.hit += 1;
  }

  hits() {
    return this.hit;
  }

  isSunk() {
    if (this.hit === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export default Ship;
