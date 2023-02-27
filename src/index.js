import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const element = <h3>TEST-Element</h3>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          {element}
          <App />
      </BrowserRouter>
      <h1>Hi -in /src/index.js</h1>
  </React.StrictMode>
);

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<Lesson />, document.getElementById('root'));

// registerServiceWorker();

// reportWebVitals();

