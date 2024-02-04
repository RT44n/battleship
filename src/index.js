class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }

  takeHit() {
    this.hit += 1;
  }

  isSunk() {
    if (this.hit === this.length) {
      this.sunk = true;
    }
  }
}
