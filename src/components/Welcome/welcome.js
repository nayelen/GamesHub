import { Header } from '../Header/header';
import './welcome.css';

export const welcome = (divApp) => {
  const welcomeContainer = document.createElement('div');
  const welcomeTitle = document.createElement('h1');
  const welcomeButton = document.createElement('button');

  welcomeTitle.textContent = "Let's Play Games!!";
  welcomeButton.textContent = "Enter";
  welcomeContainer.className = "welcomeContainer";

  divApp.appendChild(welcomeContainer);
  welcomeContainer.appendChild(welcomeTitle)
  welcomeContainer.appendChild(welcomeButton);

  const init = () => {
    welcomeContainer.remove();
  }
  welcomeButton.addEventListener('click', init)
};