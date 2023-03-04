import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Button from '@mui/material/Button';

import {Posts} from "./components/pages/Posts";
import {Lesson} from "./components/pages/Lesson";
import {Home} from "./components/pages/Home";
import Table2 from "./components/store/Table2";
// import counter from "./components/store/Counter";
function App() { //e
    // e.preventDefault();
  return (
    <div className="App">
      <header className="App-header">
          <h1>In God We Trust</h1>
          <div className="poke">
              <Link to="/">Home</Link>
              <Link to="/Table2">Table2</Link>

              <Link to="/posts">Posts</Link>
              <Link to="/Lesson">Lesson</Link>
          </div>
      </header>
        <div className="App-top">
            <br/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Table2" element={<Table2 />}/>
                <Route path="/Lesson" element={<Lesson />}/>
                <Route path="*" element={<Posts />}/>
                {/*<Route path="login" element={<LoginPage />}/>*/}
            </Routes>
            {/*'Lorem ipsum dolor sit amet.'*/}
            <h4> ... go <Link to="/">home</Link></h4>
            <Button variant="contained" ><Link to="/">home</Link>go home</Button>

        </div>
    </div>
  );
}

export default App;
