import { Footer } from './src/components/Footer/footer';
import { Header } from './src/components/Header/header';
import './style.css'

const divApp = document.querySelector('#app');
Header(divApp)

const mainContent = document.createElement('main');
mainContent.className = "content";
divApp.appendChild(mainContent);
Footer(divApp);

