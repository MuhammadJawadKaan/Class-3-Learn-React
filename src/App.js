import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">

      <Dinner dishName="Kebab" sweetDish="Baklava"/>

      <hr/>

      <Dinner dishName="Manti" sweetDish="Kunefe"/>

      <hr/>

      <Dinner dishName="pide" sweetDish="Halwa"/>

    </div>
  );
}

export default App;
