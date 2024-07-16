import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './routes';

const App = () => {
  return (
    <Router>
      <Rotas />
    </Router>
  );
};

export default App;
