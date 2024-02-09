import Gamboard from "../src/gameboard";

test("place ship in horizontal alignment", () => {
  const newBoard = new Gamboard();
  newBoard.placeShip("torch", 3, "horizontal", 4, 5);

  expect(newBoard.checkShips().length).toBe(1);
});

test("if ship placed at the right co-ordinates", () => {
  const newBoard = new Gamboard();
  newBoard.placeShip("torch", 3, "horizontal", 4, 5);
  const sship = newBoard.shipPostion();
  expect(sship.position).toStrictEqual([
    { x: 4, y: 5 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
  ]);
});

test("if ship placed at the right co-ordinates 2", () => {
  const newBoard = new Gamboard();
  newBoard.placeShip("torch", 4, "vertical", 4, 5);
  const sship = newBoard.shipPostion();
  expect(sship.position).toStrictEqual([
    { x: 4, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
  ]);
});
