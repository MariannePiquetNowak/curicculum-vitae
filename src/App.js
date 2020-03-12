import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components with state
import Container from './components/container';
import PageContainer from './containers/view.container';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PageContainer} />
    </div>
  );
}

export default App;
