import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";

import Home  from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import About from "./components/About";
import {Lesson} from "./components/Lesson";
// import counter from "./components/store/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>In God We Trust</h1>
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
