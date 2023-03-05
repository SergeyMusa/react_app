import React from 'react';
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom"; // роутер для статики
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material";

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
      {/*<Header />*/}
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </ThemeProvider>
      {/*<Footer />*/}
      {/*<h4> -in /src/index.jsx</h4>*/}
  </React.StrictMode>
);

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<Lesson />, document.getElementById('root'));

// registerServiceWorker();

// reportWebVitals();

