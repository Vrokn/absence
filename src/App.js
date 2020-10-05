import React, {  } from 'react';
import './App.css';
import Header from './Components/Header'
import Particulas from './Components/Particulas'
import Intro from './Components/Intro'
import Description from './Components/Description';


import {
  BrowserRouter as Router,
} from "react-router-dom";
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App" id='home'>
        <Header />
        <Particulas />
        <Intro />
        <Description />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
