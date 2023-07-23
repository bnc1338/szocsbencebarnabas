import React from 'react';
import Welcome from './Components/Welcome';
import './App.css';
import Portofolio from './Components/Portofolio.js';

const App = () => {
  return (
    <div className="App">
      <Welcome/>
      <Portofolio/>
    </div>
  );
};

export default App;