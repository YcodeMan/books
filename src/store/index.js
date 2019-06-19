import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import reducers from './reducres'
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers)


const store = createStore(reducer, applyMiddleware(thunk))


export default store