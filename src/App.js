import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage/>}  path='/portfolio'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
