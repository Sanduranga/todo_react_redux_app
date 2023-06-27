import { getLoadTodo, getSuccessedTodo, getErrorTodo, postSuccessTodo, deletetodo } from "./actionTypes";


const initialState = {
    todos: [],
    loading: false,
    err: null
}
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case getSuccessedTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case getLoadTodo:
            return {
                ...state,
                loading: action.payload,
            }
        case getErrorTodo:
            return {
                ...state,
                err: action.payload,
            }
        case postSuccessTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case deletetodo:
            return {
                ...state,
                todos: action.payload,
            }
        default:
            return state
    }
}