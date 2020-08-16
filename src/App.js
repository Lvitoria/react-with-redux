import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

import Intervalo from './components/intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio'
function App() {

  const [min, setMin] = useState(5)
  const [max, setMax] = useState(10)
  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>
        <div className="linha">
          <Intervalo 
              min={min} 
              max={max}
              onMinChanged={setMin}
              onMaxChanged={setMax}
          >X</Intervalo>   
        </div>
        <div className="linha">
          <Media min={min} max={max} >Y</Media>
          <Soma min={min} max={max}>Y</Soma>
          <Sorteio min={min} max={max}>Y</Sorteio>
        </div>
    </div>
  );
}

export default App;
