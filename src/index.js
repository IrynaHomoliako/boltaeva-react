import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

import ScrollToTop from './constants/scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);


