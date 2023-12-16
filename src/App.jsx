import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
    </Router>
    <Footer/>
   </>
    
  );
}
