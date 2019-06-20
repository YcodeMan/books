import {createStore, applyMiddleware} from 'redux'
import reducers from './reducres'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers)


const store = createStore(reducer, applyMiddleware(thunk))


export default store
