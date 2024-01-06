let turn = "";
let isGameOver = false;

export const boardFunctions = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", () => {
      if (!isGameOver && e.innerHTML === "") {
        e.innerHTML = turn;
        checkWin();
        checkDraw();
        changeTurn();
      }
    })
  })

  const changeTurn = () => {
    if (turn === "X") {
      turn = "O";
      document.querySelector(".bg").style.left = "85px";
      document.querySelector(".turn").innerHTML = "Turn for: "
    } else {
      turn = "X";
      document.querySelector(".bg").style.left = "0px";
      document.querySelector(".turn").innerHTML = "Turn for: "
    }
  };
  let box1 = document.querySelector('.turnBox1')
  let box2 = document.querySelector('.turnBox2')

  const select = (e) => {
    let boxSelect = e.target;
    if (boxSelect === box1) {
      turn = "X";
      document.querySelector(".bg").style.left = "0px";
      box1.removeEventListener("click", select)
      box2.removeEventListener("click", select)
    }
    if (boxSelect === box2) {
      turn = "O";
      document.querySelector(".bg").style.left = "85px";
      box2.removeEventListener("click", select)
      box1.removeEventListener("click", select)
    }
  };
  box1.addEventListener("click", select);
  box2.addEventListener("click", select);

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winConditions.length; i++) {
      const pos0 = boxes[winConditions[i][0]].innerHTML;
      const pos1 = boxes[winConditions[i][1]].innerHTML;
      const pos2 = boxes[winConditions[i][2]].innerHTML;

      if (pos0 === pos1 && pos0 === pos2 && pos0 != "") {
        isGameOver = true;
        document.querySelector(".results").innerHTML = turn + " WIN!!"

        for (let j = 0; j < 3; j++) {
          boxes[winConditions[i][j]].style.backgroundColor = "#87f4f6"
          boxes[winConditions[i][j]].style.color = "#2b2828"
        }
      }
    }
  };

  const checkDraw = () => {
    if (!isGameOver) {
      let isDraw = true;
      boxes.forEach(e => {
        if (e.innerHTML === "") isDraw = false;
      })
      if (isDraw) {
        isGameOver = true;
        document.querySelector(".results").innerHTML = "DRAW! PLAY AGAIN!"
      }
    }
  };

  const btnRestart = document.querySelector(".restartBtn")
  const restart = () => {
    isGameOver = false;
    turn = "";
    document.querySelector(".bg").style.left = "";
    document.querySelector(".results").innerHTML = "";
    document.querySelector(".turn").innerHTML = "Choose player"
    box1.addEventListener("click", select);
    box2.addEventListener("click", select);

    boxes.forEach(e => {
      e.innerHTML = "";
      e.style.backgroundColor = "";
      e.style.color = "#ffffff"
    })
  }

  btnRestart.addEventListener("click", restart);

};