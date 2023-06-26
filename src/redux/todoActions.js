    import axios from "axios"
import { getLoadTodo, getSuccessedTodo, getErrorTodo } from "./actionTypes"

export function getLoad(isLoading) {
    return {
        type: getLoadTodo,
        payload: isLoading,
    }
}

export function getTodos(results) {
    return {
        type: getSuccessedTodo,
        payload: results,
    }
}

export function getError() {
    return {
        type: getErrorTodo,
        payload: 'result.err',
    }
}

export function fetchTodos() {
    return async function(dispatch, getState) {
        dispatch(getLoad(true))
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch(getTodos(result.data))
        dispatch(getLoad(false))
    }
}