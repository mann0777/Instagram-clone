import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Context from './Global/Context';


function App() {
  return (
    <div>
    <Context>
      <Navbar/>
      <Model />
    </Context>
       
    </div>
  );
}

export default App;
