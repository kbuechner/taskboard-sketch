import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("in index")
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);