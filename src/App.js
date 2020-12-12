import React from 'react';
import Header from '../src/sections/Header/Header'
import './App.css';
import Carrusel from './components/Carrusel'


function App() {
  return (
     <div className="App">
      <Header></Header>
      <Carrusel/>
    </div>
  );
}

export default App;
