import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import restaurant from "../src/icons_assets/restaurant.jpg"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="description" content="We are a family owned Mediterranean restuarant, focused on traditional recipies served with a modern twist."/>
    <meta name="og:title" content="Little Lemon Restaurant"/>
    <meta name="og:description" content="We are a family owned Mediterranean restuarant, focused on traditional recipies served with a modern twist."/>
    <meta name="og:image" content="restaurant"/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
