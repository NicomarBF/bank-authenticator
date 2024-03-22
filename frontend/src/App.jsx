import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/auth/Login';
import Main from './pages/main/Main';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route element={isAuthenticated ? <Main onLogout={handleLogout} /> : <Navigate to="/login" />}>
          <Route path="/" element={<Main onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;