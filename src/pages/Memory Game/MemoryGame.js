import './MemoryGame.css';
import { cards } from './memoryCards';

export const MemoryGame = () => {
  const mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
  const h1Title = document.createElement("h1");
  h1Title.textContent = "Memory Game";
  const boardMemory = document.createElement("div");
  boardMemory.className = "boardMemory";
  mainContent.appendChild(h1Title);
  mainContent.appendChild(boardMemory);

  let counter = 0;
  let card1;
  let card2;
  let points = 0;
  let disabled = false;

  const points$$ = document.createElement("h3");
  points$$.className = "points";
  mainContent.appendChild(points$$);

  const select = (e) => {
    let clickedCard = e.target;
    if (clickedCard !== card1 && !disabled) {
      clickedCard.classList.add("clicked");
      if (!card1) {
        return card1 = clickedCard;
      }
      card2 = clickedCard;
      disabled = true;
      let card1Img = card1.querySelector("img").src;
      let card2Img = card2.querySelector("img").src;
      matchCards(card1Img, card2Img);
    }
  };
  const matchCards = (img1, img2) => {
    if (img1 === img2) {
      points++;
      counter++;
      card1.removeEventListener("click", select);
      card2.removeEventListener("click", select);
      card1 = card2 = "";
      points$$.innerHTML = `Your score is: ${points}`
      console.log(points)
      if (points === 9) {
        points$$.innerHTML = `You WIN!! Total points: ${points}`
        console.log(points)
        // reset();
      }
      return disabled = false;
    }


    setTimeout(() => {
      card1.classList.add("shake");
      card2.classList.add("shake");
    }, 400);
    setTimeout(() => {
      card1.classList.remove("shake", "clicked");
      card2.classList.remove("shake", "clicked");
      card1 = card2 = "";
      disabled = false;
    }, 1200);
  };
  const printCards = () => {
    for (const card of cards) {
      const divCard = document.createElement("div");
      divCard.className = "divCard";
      const frontCard = document.createElement("div");
      frontCard.className = "front";
      const backCard = document.createElement("div");
      backCard.className = "back";
      const image = document.createElement("img");
      image.src = card.image

      divCard.addEventListener("click", select)

      backCard.appendChild(image)
      divCard.appendChild(frontCard)
      divCard.appendChild(backCard)
      boardMemory.appendChild(divCard);
    }
  }
  printCards(cards.sort(() => Math.random() - Math.random()));

  const btnRestart = document.createElement("button");
  btnRestart.textContent = "Restart";
  btnRestart.className = "restart";
  mainContent.appendChild(btnRestart);

  const reset = () => {
    boardMemory.innerHTML = "";
    points$$.innerHTML = "";
    points = 0;
    card1 = "";
    card2 = "";
    printCards(cards.sort(() => Math.random() - Math.random()));
  };

  btnRestart.addEventListener("click", reset);

}