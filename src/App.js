import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Readme from './components/Readme';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Readme/>
      </div>
    </Router>
  );
}

export default App;
