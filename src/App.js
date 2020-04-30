import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';

// Containers
import PageContainer from './containers/landing.container';
import ContainerMaterial from './components/material-v2/container';
import NotFound from './notfound';


const App = () => (

  <div className='App'>
    <Switch>
      <Route exact path='/' component={PageContainer} />
      <Route path='/v2' component={ContainerMaterial} />
      <Route component={NotFound} />
    </Switch>
  </div>

);


export default App;
