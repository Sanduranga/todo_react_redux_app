
import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todoApp/todoReduser'


const rootReducer = combineReducers({
    todo: todoReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store