import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
