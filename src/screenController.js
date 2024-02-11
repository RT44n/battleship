const screenController = () => {
  const content = document.createElement("div");
  document.body.append(content);

  const playerBoardDisplay = document.createElement("div");
  playerBoardDisplay.classList.toggle("playerBoardDislay");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const displayTile = document.createElement("div");
      displayTile.style.border = "1px solid black";
      displayTile.dataset.coordinate = [i, j];
      displayTile.style.width = "50px";
      displayTile.style.height = "50px";

      displayTile.classList.toggle("displayTile");
      playerBoardDisplay.append(displayTile);
    }
  }
  content.append(playerBoardDisplay);
};

export default screenController;
