// REACT DEF
import React from 'react';
// ROUTES
import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import Home from './page/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;