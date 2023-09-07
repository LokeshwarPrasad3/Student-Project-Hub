import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Pages/Authentication';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
