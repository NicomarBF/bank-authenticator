import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/auth/Login';
import Main from './pages/main/Main';


const App = () => {

  const isAuthenticated = () => {
    return false;
  };

  return (
    <Router>
      <Routes>
        <Route element={isAuthenticated() ? <Main /> : <Navigate to="/login" />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;