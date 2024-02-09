import Ship from "../src/ship";

test("hitting ship raises ship hit counter", () => {
  const newship = new Ship(3);
  newship.takeHit();
  expect(newship.hits()).toBe(1);
});

test("hitting ship n times raises ship hit counter n times", () => {
  const newship = new Ship(4);
  newship.takeHit();
  newship.takeHit();
  newship.takeHit();
  newship.takeHit();
  expect(newship.hits()).toBe(4);
});

test("ship sunk after hit number = ship length", () => {
  const newship = new Ship(1);
  newship.takeHit();
  expect(newship.isSunk()).toBe(true);
});

test("disallow hits after ship is sunk", () => {
  const newship = new Ship(2);
  newship.takeHit();
  newship.takeHit();
  expect(newship.takeHit()).toBe("Ship already sunk. Can't hit again");
});
