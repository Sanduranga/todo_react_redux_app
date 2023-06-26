import { getLoadTodo, getSuccessedTodo, getErrorTodo } from "./actionTypes";


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
                loading: true,
            }
        case getErrorTodo:
            return {
                ...state,
                err: action.payload,
            }
        default:
            return state
    }
}