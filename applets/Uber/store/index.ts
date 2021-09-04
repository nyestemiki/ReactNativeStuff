import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import navReducer from './nav/navReducer'

const combinedReducers = combineReducers({ navReducer })

const store = createStore(combinedReducers, applyMiddleware(thunk))

export default store
