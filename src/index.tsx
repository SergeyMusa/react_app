import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom"; // роутер для статики
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {Footer} from "./components/pages/Footer";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      <Footer />
      {/*<h4> -in /src/index.js</h4>*/}
  </React.StrictMode>
);

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<Lesson />, document.getElementById('root'));

// registerServiceWorker();

// reportWebVitals();

