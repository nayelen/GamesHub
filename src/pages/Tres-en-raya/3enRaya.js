import { initBoard } from "./TresEnRaya-JS/tablero";
import { boardFunctions } from "./TresEnRaya-JS/funcionesTablero";

import "./3enRaya.css";

export const initTresEnRaya = () => {

  const mainContent = document.querySelector(".content");
  mainContent.innerHTML = "";
  const h1Title = document.createElement("h1");
  h1Title.textContent = "Tres en Raya";
  mainContent.appendChild(h1Title);

  initBoard()
  boardFunctions()
}

