import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material";
import '../public/index.css';
import './i18n'

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
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
