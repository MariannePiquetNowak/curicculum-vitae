import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

import App from './App';
import NotFound from './notfound';

import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <Router>
      <Switch> 
        <Route exact path='/' component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
Notes : 
Le <Switch /> est un component de type switch utilisé quand il y a plusieurs liens (si c'est telle page, tu m'affiches celle-là etc.)
@link : https://www.youtube.com/watch?v=JBr3DIr3cIs
*/