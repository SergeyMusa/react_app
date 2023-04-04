import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {Timers} from "./components/pages/Timers";
import {Cards} from "./components/pages/Cards/Cards";
import './styles/main.scss'
import {Header} from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import {Container} from "@mui/material";
import {Tables} from "./components/pages/Table/Tables";
import {Home} from "./components/pages/Home/Home"; //, createTheme

function App() {

    return (
        <div className="App">
            <Header/>
            <Container
                sx={{mt: '1rem'}}
                maxWidth={false}
            >
                <header className="App-header">
                    <h1>In God We Trust</h1>
                    <div className="poke">
                        <Link id="one" to="/Home">нe_Home</Link>
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
