import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom"
=======
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
=======
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 49eb565b5e4bcc40d5f562bdce8f158c87b46ecc
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
