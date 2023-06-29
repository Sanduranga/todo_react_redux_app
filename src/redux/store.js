
import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todoReduser'


const rootReducer = combineReducers({
    todo: todoReducer,
})

const store = createStore(rootReducer, applyMiddleware( thunk))

export default store