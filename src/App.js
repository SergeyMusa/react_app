import React from "react";
import Home from "./Components/home";
import LoginPage from "./Components/auth/login";
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> HERE.
        </p>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="#https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*</a>*/}

          <div className="test">
            Learn React
          </div>

      </header>
      <Home />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
