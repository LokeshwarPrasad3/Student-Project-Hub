import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Pages/Authentication';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage'


function App() {
  return (
    <>
      <Routes>
      {/* user authenticate goto home page */}
        <Route path="/" element={<HomePage />} />
        {/* user need login register goto authentication */}
        <Route path="/auth" element={<Authentication />} />
        {/* after register goto profile section */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
