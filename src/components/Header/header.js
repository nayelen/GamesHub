import { Ahorcado } from "../../pages/Ahorcado/Ahorcado";
import { MemoryGame } from "../../pages/Memory Game/MemoryGame";
import { initTresEnRaya } from "../../pages/Tres-en-raya/3enRaya";
import "./header.css";

export const Header = (divApp) => {
  const header = document.createElement('header');
  const buttonTer = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');

  buttonTer.textContent = "Tic-Tac-Toe";
  button2.textContent = "Hangman Game";
  button3.textContent = "Memory Game";

  buttonTer.addEventListener('click', initTresEnRaya);
  button2.addEventListener('click', Ahorcado);
  button3.addEventListener('click', MemoryGame);

  header.appendChild(buttonTer);
  header.appendChild(button2);
  header.appendChild(button3);
  divApp.appendChild(header);
}