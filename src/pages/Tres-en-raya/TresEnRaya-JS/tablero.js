const boardPositions = ["", "", "", "", "", "", "", "", "",]

export const initBoard = () => {
  const mainContent = document.querySelector(".content");
  const board = document.createElement("div");
  board.className = "board";

  boardPositions.forEach(element => {
    const box = document.createElement("button");
    box.className = "box";
    board.appendChild(box);
  });
  const turnContainer = document.createElement("div");
  const turn = document.createElement("h3");
  const turnBox1 = document.createElement("p");
  const turnBox2 = document.createElement("p");
  const divBg = document.createElement("div");
  turn.innerHTML = "Choose player";
  turn.className = "turn"
  turnBox1.className = "turnBox1";
  turnBox1.textContent = "X";
  turnBox2.className = "turnBox2";
  turnBox2.textContent = "O";
  divBg.className = "bg"
  turnContainer.className = "turnContainer";

  mainContent.appendChild(turnContainer)
  turnContainer.appendChild(turn)
  turnContainer.appendChild(turnBox1)
  turnContainer.appendChild(turnBox2)
  turnContainer.appendChild(divBg)
  mainContent.appendChild(board);

  const divFinal = document.createElement("div");
  const h2Results = document.createElement("h2")
  const restartBtn = document.createElement("button")

  divFinal.className = "divFinal";
  restartBtn.textContent = "Restart";
  restartBtn.className = "restartBtn";
  h2Results.className = "results";
  h2Results.textContent = " "

  mainContent.appendChild(divFinal)
  divFinal.appendChild(h2Results);
  divFinal.appendChild(restartBtn)


}