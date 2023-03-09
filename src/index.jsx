import React from 'react';
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom"; // роутер для статики
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material";
// import Devools

const theme = createTheme({
    palette: {
        primary: {
            main: '#6f6fe3'
        },
        secondary: {
            main: '#7c2f96'
        },
    }
})

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <ThemeProvider theme={theme}>
        {/*<DevTools />*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
    </React.StrictMode>
);

// ReactDOM.render(element, document.getElementById('root'));

