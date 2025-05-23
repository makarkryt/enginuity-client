import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Components/nav/nav';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Provider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Nav/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


