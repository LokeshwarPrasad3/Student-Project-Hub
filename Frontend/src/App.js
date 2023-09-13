import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Pages/Authentication';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage'
import ProjectPage from './Pages/ProjectPage'
import DocsPage from './Pages/DocsPage';
import MessagePage from './Pages/MessagePage';



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
        {/* can see Project information */}
        <Route path="/project" element={<ProjectPage />} />
        {/* documentation page */}
        <Route path="/docs" element={<DocsPage />} />
        {/* Messages page */}
        <Route path="/message" element={<MessagePage />} />
        
      </Routes>
    </>
  );
}

export default App;
