import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import reduxPromise from 'redux-thunk'
import {combineReducers} from 'redux-immutable'


const reducer = combineReducers({
    category
})
const store = createStore(reducer, applyMiddleware(reduxPromise))
