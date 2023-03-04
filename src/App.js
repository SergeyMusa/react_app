import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Button from '@mui/material/Button';

import {Posts} from "./components/pages/Posts";
import {Table} from "./components/pages/Table";
import {Lesson} from "./components/pages/Lesson";
import {Home} from "./components/pages/Home";
// import counter from "./components/store/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>In God We Trust</h1>
          <div className="poke">
              <Link to="/">Home</Link>
              <Link to="/Table">Table</Link>

              <Link to="/posts">Posts</Link>
              <Link to="/Lesson">Lesson</Link>
          </div>
      </header>
        <div className="App-top">
            <br/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Table" element={<Table />}/>
                <Route path="/Lesson" element={<Lesson />}/>
                <Route path="*" element={<Posts />}/>
                {/*<Route path="login" element={<LoginPage />}/>*/}
            </Routes>
            {/*'Lorem ipsum dolor sit amet.'*/}
            <Button variant="contained"  href="/">go home</Button>
            {/*<h4> ... go <Link to="/">home</Link></h4>*/}
        </div>
    </div>
  );
}

export default App;
