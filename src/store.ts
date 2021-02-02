import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};

const Store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default Store