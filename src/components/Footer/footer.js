import './footer.css';

export const Footer = (divApp) => {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const link = document.createElement('a');

  p.textContent = ' Created by Nadia Pérez with 💜 © 2024'
  img.src = '/assets/github.png';
  link.href = "https://github.com/nayelen";

  divApp.appendChild(footer);
  footer.appendChild(p);
  footer.appendChild(link);
  link.appendChild(img);

}