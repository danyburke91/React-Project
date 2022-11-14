import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// creating a variable. inside function passing docu, get element and grabe that root, save to variable root
//thats why in html we have root

//render root
//render app form app.js... app gets the image and the text

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
  
);
