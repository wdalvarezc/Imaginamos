import {applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))