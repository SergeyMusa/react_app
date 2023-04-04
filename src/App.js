import React from "react";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Button from '@mui/material/Button';
import './assets/styles/main.scss'
import {Container} from "@mui/material";
import {Cards} from "../src/view/pages/Cards/Cards";
import {Home} from "../src/view/pages/Home/Home";
import {Tables} from "../src/view/pages/Table/Tables";
import {Header} from "../src/view/components/Header/Header";
import Footer from "../src/view/components/Footer/Footer";
import {Timers} from "../src/view/pages/Timer/Timers";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container sx={{mt: '1rem'}} maxWidth={false}>
        <header className="App-header">
          <h1>In God We Trust</h1>
          <div className="poke">
            <Link id="one" to="/Home">Home</Link>
            <Link id="one" to="/">Cards</Link>
            <Link id="one" to="/Tables">Tables</Link>
            <Link id="one" to="/Timers">Timers</Link>
          </div>
        </header>
        <div className="App-top">
          <br/>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Cards/>}/>
            <Route path="/Tables" element={<Tables/>}/>
            <Route path="*" element={<Timers/>}/>
          </Routes>
          <Button variant="contained" href="/">go home</Button>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
