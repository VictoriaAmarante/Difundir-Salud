import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Login from "./Login";
import Registrarse from "./Registrarse";
import Formulario from "./Formulario";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <Formulario />
        </div>
  );
}

export default App;
