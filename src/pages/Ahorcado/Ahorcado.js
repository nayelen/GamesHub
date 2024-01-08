import "./Ahorcado.css";
import { alphabet, words } from "./data";

export const Ahorcado = () => {
  const mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
  const h1Title = document.createElement("h1");
  h1Title.textContent = "Ahorcado";
  mainContent.appendChild(h1Title);

  const btnStart = document.createElement("button");
  btnStart.textContent = "Play";
  btnStart.id = "btnStart";
  mainContent.appendChild(btnStart);

  let divWord = document.createElement("div");
  divWord.id = "word"
  let divAlphabet = document.createElement("div");
  divAlphabet.id = "alphabet";
  const h2Play = document.createElement("h2");
  h2Play.className = "playAgain";
  const divFinal = document.createElement("div");
  divFinal.className = "final";
  const image = document.createElement("img");
  image.className = "image";
  const result = document.createElement("h3");
  const container = document.createElement("div");
  const wrongLetters = document.createElement("p");

  mainContent.appendChild(divWord);
  mainContent.appendChild(h2Play);
  mainContent.appendChild(divAlphabet);
  divFinal.appendChild(image);
  divFinal.appendChild(container);
  container.appendChild(wrongLetters);
  container.appendChild(result);
  mainContent.appendChild(divFinal);

  let randomWord = "";
  let mistakes = 0;
  let rigths = 0;

  const start = () => {
    randomWord = getRandomWord();
    image.src = "/assets/img0.png";
    result.innerHTML = "";
    h2Play.innerHTML = "";
    mistakes = 0;
    rigths = 0;
    printAlphabet();
    printDivs(randomWord)
  };
  const getRandomWord = () => {
    const aleatoryWord = words[Math.floor(Math.random() * words.length)]
    return aleatoryWord
  };
  const printDivs = (word) => {
    let divWord = document.querySelector("#word")
    divWord.textContent = "";
    for (const letter of word) {
      const divLetter = document.createElement("div");
      const h3Letter = document.createElement("h3");
      h3Letter.textContent = letter;
      divLetter.appendChild(h3Letter);
      divWord.appendChild(divLetter);
    }
  };
  const checkWord = (e) => {
    const btnLetter = e.target;
    let checked = randomWord.includes(e.target.textContent)
    if (checked) {
      let h3$$ = document.querySelectorAll("h3");
      btnLetter.disabled = true;
      for (const element of h3$$) {
        if (element.textContent === e.target.textContent) {
          rigths++;
          element.classList.add("includes");
          console.log("includes")
        }
      }
    }
    if (!checked) {
      btnLetter.disabled = true;
      mistakes++;
      image.src = `/assets/img${mistakes}.png`;
      wrongLetters.innerHTML += e.target.textContent + ",";
    }
    if (mistakes === 6) {
      result.innerHTML = " You loose! the word was: " + randomWord
      gameOver()
    } else if (rigths === randomWord.length) {
      result.innerHTML = " You win!!"
      gameOver();
    }
  };

  const printAlphabet = () => {
    let divAlphabet = document.querySelector("#alphabet")
    divAlphabet.textContent = "";
    for (const letter of alphabet) {
      const letter$$ = document.createElement("button");
      letter$$.textContent = letter;
      letter$$.addEventListener("click", checkWord);
      divAlphabet.appendChild(letter$$);
    }
  };
  const gameOver = () => {
    image.src = "/assets/img0.png";
    divWord.textContent = "";
    divAlphabet.textContent = "";
    wrongLetters.textContent = "";
    h2Play.textContent = "PLAY AGAIN!";
  }

  btnStart.addEventListener("click", start);
};
