import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Racao from './components/Racao';
import Blog from './pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/login" Component={ Login } />
      <Route path="/register" Component={ Register } />
      <Route path="/racao" Component={ Racao } />
      <Route path="/blog" Component={ Blog } />
    </Routes>
  );
};

export default AppRoutes;
