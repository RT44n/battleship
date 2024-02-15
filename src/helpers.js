const randomInt = () => {
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(10);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const randomTile = () => {
  const x = randomInt();
  const y = randomInt();
  const tiles = [x, y];
  return tiles;
};

export default randomTile;
