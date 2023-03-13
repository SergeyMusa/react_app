import React from "react";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Button from '@mui/material/Button';

import {Timers} from "./components/pages/Timers";
import {Table} from "./components/pages/Table/Table";
import Lesson2 from "./components/pages/Lesson";
import {Home} from "./components/pages/Home";
import './styles/main.scss'
import {Header} from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import {Container} from "@mui/material"; //, createTheme


function App() {

        function handleOnClick () {
            console.log('push btn')
        return (
            <Link id="one" to="/Home"></Link>
        )

            // this.props.history.push('/')
        };

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
                        <Link id="one" to="/Home">Home</Link>
                        <Link id="one" to="/">Table</Link>

                        <Link id="one" to="/Timers">Timers</Link>
                        <Link id="one" to="/Lesson">Lesson</Link>
                    </div>
                </header>
                <div className="App-top">
                    <br/>
                    <Routes>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/" element={<Table/>}/>
                        <Route path="/Lesson" element={<Lesson2/>}/>
                        <Route path="*" element={<Timers/>}/>
                        {/*<Route path="login" element={<LoginPage />}/>*/}
                    </Routes>
                    {/*'Lorem ipsum dolor sit amet.'*/}
                    {/*<Button variant="contained" onClick={handleOnClick}>go home</Button>*/}
                    <Button variant="contained" href="/">go home</Button>
                    {/*  */}
                    {/*<h4> ... go <Link to="/">home</Link></h4>*/}
                </div>
                </Container>
                <Footer/>
        </div>
);
}

export default App;
