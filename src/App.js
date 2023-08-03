import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import PartSearch from './PartSearch/PartSearch';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/part-search" element={<PartSearch/>} />
      </Routes>
    </Router>
  );
}

export default App;
