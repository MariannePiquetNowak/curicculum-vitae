import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Import de tous les reducers
import pageReducer from './reducers/view.reducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Création du store avec tous les reducers
export default createStore(
    combineReducers({
        pageReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
