import { getLoadTodo, getSuccessedTodo, getErrorTodo, postSuccessTodo, updateTodo, updateErrTodo, postErrTodo, checkedObjTodo, checkedErrTodo } from "./actionTypes";


const initialState = {
    todos: [],
    loading: false,
    err: null,
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
        case postErrTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case updateTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case updateErrTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case checkedObjTodo:
            return {
                ...state,
                todos: action.payload,
            }
        case checkedErrTodo:
            return {
                ...state,
                todos: action.payload,
            }
        default:
            return state
    }
}