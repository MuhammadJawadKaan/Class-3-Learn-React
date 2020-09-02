import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">

      <Dinner dishName="Nihaari" sweetDish="Kheer"/>

      <hr/>

      <Dinner dishName="Biryani" sweetDish="Jalebi"/>

      <hr/>

      <Dinner dishName="Karahi" sweetDish="Halwa"/>

    </div>
  );
}

export default App;
