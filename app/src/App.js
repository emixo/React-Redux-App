import React from 'react';
import './App.css';
import LoLChamps from "./components/lolChamps"
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
     <LoLChamps />
    </div>
  );
}

export default App;
