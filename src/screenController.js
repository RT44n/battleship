import gameController from "./gameController";

const screenController = () => {
  const game = gameController();
  const container = document.querySelector(".container");
  const gameContent = document.createElement("div");
  gameContent.classList.add("gameContent");
  container.appendChild(gameContent);

  const createBoardDisplay = (
    playerBoard,
    playerNumber,
    isEnemyBoard = false
  ) => {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("boardContainer");

    const boardDisplay = document.createElement("div");
    const boardDisplayTitle = document.createElement("h2");
    boardDisplayTitle.textContent = `Player ${playerNumber} Board`;
    boardDisplay.className = `playerBoardDisplay player${playerNumber}BoardDisplay`;

    playerBoard.forEach((row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        const displayTile = document.createElement("div");
        displayTile.className = `displayTile player${playerNumber}DisplayTile`;
        displayTile.dataset.index = `${rowIndex},${tileIndex}`;
        displayTile.dataset.player = playerNumber;

        if (isEnemyBoard) {
          if (tile === "hit") displayTile.style.backgroundColor = "red";
          else if (tile === "miss")
            displayTile.style.backgroundColor = "orange";
          else displayTile.style.backgroundColor = "lightblue";
        } else if (tile === "ship") displayTile.style.backgroundColor = "green";
        else if (tile === "hit") displayTile.style.backgroundColor = "red";
        else if (tile === "miss") displayTile.style.backgroundColor = "orange";
        else displayTile.style.backgroundColor = "lightblue";

        boardDisplay.appendChild(displayTile);
      });
    });

    boardContainer.appendChild(boardDisplayTitle);
    boardContainer.appendChild(boardDisplay);

    return boardContainer;
  };

  const updateScreen = (gameEnded = false) => {
    gameContent.textContent = ""; // Clear the gameContent

    const player1Board = game.player1Board();
    const player1BoardDisplay = createBoardDisplay(player1Board, 1, false);
    const player2Board = game.player2Board();
    const player2BoardDisplay = createBoardDisplay(player2Board, 2, true);

    gameContent.appendChild(player1BoardDisplay);
    gameContent.appendChild(player2BoardDisplay);

    if (!gameEnded) {
      const enemyTiles = document.querySelectorAll(".player2DisplayTile");
      enemyTiles.forEach((tile) => {
        if (
          tile.style.backgroundColor !== "red" &&
          tile.style.backgroundColor !== "orange" &&
          !tile.classList.contains("hasEventListener")
        ) {
          tile.addEventListener("click", attackTile);
          tile.classList.add("hasEventListener"); // Mark to avoid adding listeners again
        }
      });
    }
  };

  const attackTile = (e) => {
    const [x, y] = e.target.dataset.index.split(",").map(Number);
    const { player } = e.target.dataset;

    if (player === "2") {
      game.playRoundVSComputer(x, y);
      const player1Status = game.player1Win();
      const player2Status = game.player2Win();

      if (player1Status || player2Status) {
        wingameScreen(player1Status);
      } else {
        updateScreen();
      }
    }
  };

  const wingameScreen = (player1Wins) => {
    updateScreen(true);

    document
      .querySelectorAll(".player2DisplayTile.hasEventListener")
      .forEach((tile) => {
        tile.removeEventListener("click", attackTile);
        tile.classList.remove("hasEventListener");
      });

    const winner = player1Wins ? "Player 1" : "Player 2";
    const winMessage = document.createElement("div");
    winMessage.classList.add("winMessage");
    winMessage.textContent = `${winner} Wins!`;
    document.body.appendChild(winMessage);
  };

  const placeShipsButton = document.createElement("button");
  placeShipsButton.textContent = "Place Ships";
  container.appendChild(placeShipsButton);

  const playGameButton = document.createElement("button");
  playGameButton.textContent = "Play Game";
  playGameButton.addEventListener("click", () => {
    game.player2PlaceShips();
    updateScreen();
    container.removeChild(playGameButton);
    container.removeChild(placeShipsButton);
  });

  placeShipsButton.addEventListener("click", () => {
    game.player1PlaceShips();
    container.appendChild(playGameButton);
    updateScreen();
  });

  updateScreen();
};

export default screenController;
