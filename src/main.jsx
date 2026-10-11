import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import './styles/style.css';
import './styles/extra.css';
import './styles/sections.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Fade out the static preloader from index.html once the page has loaded.
const pre = document.getElementById('preloader');
if (pre) {
  const hide = () => { pre.classList.add('done'); setTimeout(() => pre.remove(), 600); };
  if (document.readyState === 'complete') setTimeout(hide, 300);
  else window.addEventListener('load', () => setTimeout(hide, 300), { once: true });
  setTimeout(hide, 4000); // never block the page if a resource hangs
}