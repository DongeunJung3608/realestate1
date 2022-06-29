import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1, h2, p {
    margin: 0
  }
  a {
    text-decoration : none;
    color : white;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
  }
  img {
    width: 100%;
  }
  body {
    height: 100vh;
  }
  #root {
    font-size: 1rem;
    font-weight: 500;
    min-height: 100%;
    position: relative;
    user-select: none;
  }
  input, button {
    font-size: 1rem;
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
