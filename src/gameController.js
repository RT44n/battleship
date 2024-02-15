import Player from "./player";

const gameController = () => {
  const playerName = prompt("whats your name?");
  const player1 = new Player(playerName);
  const player2 = new Player();

  const player1Name = () => player1.playerName;
  const player2Name = () => player2.playerName;

  const player1PlaceShips = () => {
    player1.placeShip();
  };
  const player2PlaceShips = () => {
    player2.placeShip();
  };

  const player1Board = () => player1.showBoard();
  const player2Board = () => player2.showBoard();

  const player1BoardHit = (x, y) => {
    player1.hit(x, y);
  };
  const player2BoardHit = (x, y) => {
    player2.hit(x, y);
  };

  const player2Win = () => player1.hasLost();
  const player1Win = () => player2.hasLost();

  let currentPlayer = player1;

  const switchPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  };

  const playRoundVSComputer = (x, y) => {
    player2.hit(x, y);
    player1.randomHit();
  };
  return {
    switchPlayer,
    player1Board,
    player2Board,
    player1BoardHit,
    player2BoardHit,
    playRoundVSComputer,
    player1Win,
    player2Win,
    player1PlaceShips,
    player2PlaceShips,
    player1Name,
    player2Name,
  };
};

export default gameController;
