import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import de tous les reducers
import landingPageReducer from './reducers/landing.reducer';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Création du store avec tous les reducers
export default createStore(
    combineReducers({
        ...reducers,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
