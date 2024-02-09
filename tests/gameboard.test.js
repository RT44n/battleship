import Gameboard from "../src/gameboard";

test("place ship in horizontal alignment", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip("torch", 3, "horizontal", 4, 5);

  expect(newBoard.checkShips().length).toBe(1);
});

test("if ship placed at the right co-ordinates", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip("torch", 3, "horizontal", 4, 5);

  expect(newBoard.shipPosition(0)).toStrictEqual([
    { x: 4, y: 5 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
  ]);
});

test("if ship placed at the right co-ordinates 2", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip("torch", 4, "vertical", 4, 5);
  expect(newBoard.shipPosition(0)).toStrictEqual([
    { x: 4, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
  ]);
});

// test hits

test("if board takes hits", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip("torch", 4, "vertical", 5, 2);
  expect(newBoard.takeHit(4, 7)).toBe("Miss");
  expect(newBoard.takeHit(0, 0)).toBe("Miss");
  expect(newBoard.takeHit(7, 2)).toBe("Hit!");
});

test("board reports when all the ships are sunk", () => {
  const newBoard = new Gameboard();
  newBoard.placeShip("Submarine", 5, "horizontal", 4, 5);
  newBoard.takeHit(4, 5);
  expect(newBoard.allSunk()).toBe(false);

  newBoard.takeHit(4, 9);
  expect(newBoard.allSunk()).toBe(false);

  newBoard.takeHit(4, 6);
  expect(newBoard.allSunk()).toBe(false);

  newBoard.takeHit(4, 7);
  newBoard.takeHit(4, 8);
  newBoard.takeHit(4, 5);
  expect(newBoard.allSunk()).toBe(true);
});
