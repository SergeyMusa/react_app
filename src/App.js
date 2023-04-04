import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Button from '@mui/material/Button';
import './assets/styles/main.scss'
import {Container} from "@mui/material";
import {CardListScreen} from "_view/screen/CardList/CardList.screen";
import {Home} from "_view/screen/Home/Home";
import {Tables} from "_view/screen/Table/Tables";
import {Header} from "_view/components/Header/Header";
import Footer from "../src/view/components/Footer/Footer";

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
          </div>
        </header>
        <div className="App-top">
          <br/>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<CardListScreen/>}/>
            <Route path="/Tables" element={<Tables/>}/>
          </Routes>
          <Button variant="contained" href="/">go home</Button>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
