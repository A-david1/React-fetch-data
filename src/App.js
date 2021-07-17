import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from "react";
import DisplayEmployee from './components/DisplaySimpson';
import DisplaySimpson from "./components/DisplaySimpson";

function App() {
    const sampleSimpson = {
        "quote": "By chilling my loins I increase the chances of impregnating my wife.",
        "character": "Apu Nahasapeemapetilon",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
        "characterDirection": "Left"
    };
    const [simpson, setSimpson] = useState(sampleSimpson);
    const getSimpson = () => {
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then((response) => response.data)
            .then((data) => {
                setSimpson(data[0]);
            });
    };

  return (
    <div className="App">
      <DisplaySimpson simpson={simpson}/>
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;
