import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";

import Home  from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import About from "./components/About";
import Lesson from "./components/Lesson";
// import LoginPage from "./components/auth/login";
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>In God We Trust</h1>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> HERE.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="#https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*</a>*/}
          <div className="poke">
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/about">About</Link>
              <Link to="/Lesson">Lesson</Link>

          </div>

      </header>
        <div className="App-top">

            <br/>
            'Lorem ipsum dolor sit amet.'
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/Lesson" element={<Lesson />}/>
                <Route path="*" element={<Posts />}/>
                {/*<Route path="login" element={<LoginPage />}/>*/}
            </Routes>

        </div>
    </div>
  );
}

export default App;
