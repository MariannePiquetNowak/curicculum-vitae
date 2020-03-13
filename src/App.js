import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Containers
import PageContainer from './containers/landing.container';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PageContainer} />
    </div>
  );
}

export default App;
