import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import PartSearch from './PartSearch/PartSearch';
import CarSell from './CarSell/CarSell';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/part-search" element={<PartSearch/>} />
        <Route path="/car-sell" element={<CarSell/>} />
      </Routes>
    </Router>
  );
}

export default App;
