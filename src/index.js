import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import Lesson from "./Components/Lesson";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const element = <h3>TEST-Element</h3>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//
//   <React.StrictMode>
//       <h1>HI</h1>
//       element
//     {/*<App />*/}
//   </React.StrictMode>
// );
React.createElement('div', null, 'Simple div with text'); // dont work?
React.createElement('input', {className: 'just-class'}); // создание компонентов react без jsx

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Lesson />, document.getElementById('root'));

// registerServiceWorker();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

