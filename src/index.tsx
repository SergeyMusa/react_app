import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom"; // роутер для статики
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

const header = <h3>TEST-Element</h3>;

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          {header}
          <App />
      </BrowserRouter>
      <h1>Hi -in /src/index.js</h1>
  </React.StrictMode>
);

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<Lesson />, document.getElementById('root'));

// registerServiceWorker();

// reportWebVitals();

