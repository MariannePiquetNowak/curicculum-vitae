import React from 'react';
import './App.css';

// Components with state
import Container from './components/main-content';
import Form from './components/form';

// Components stateless
import Info from './components/info';
import Character from './components/character-main';

function App() {
  return (
    <div className="App">
      <p>coucou</p>
      <Container />
      <Info />
      <Character />
      <Form />
    </div>
  );
}

export default App;
