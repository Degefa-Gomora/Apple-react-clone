import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//CSS and Js
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/custom.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
