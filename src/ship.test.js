import Ship from "./ship";

const newship = new Ship(5);

test("hitting ship raises ship hit counter", () => {
  newship.takeHit();
  expect(newship.hits()).toBe(1);
});

test("hitting ship n times raises ship hit counter n times", () => {
  newship.takeHit();
  newship.takeHit();
  newship.takeHit();
  newship.takeHit();
  expect(newship.hits()).toBe(5);
});

test("ship sunk after hit number = ship length", () => {
  expect(newship.isSunk()).toBe(true);
});

test("disallow hits after ship is sunk", () => {
  expect(newship.takeHit()).toBe("Ship already sunk. Can't hit again");
});
