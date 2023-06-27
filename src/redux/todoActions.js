import axios from "axios"
import { getLoadTodo, getSuccessedTodo, getErrorTodo, postSuccessTodo, deletetodo } from "./actionTypes"

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

export function getError(err) {
    return {
        type: getErrorTodo,
        payload: err,
    }
}

export function postTodos(results) {
    return {
        type: postSuccessTodo,
        payload: results,
    }
}

export function deleteTodos(results) {
    return {
        type: deletetodo,
        payload: results,
    }
}

export function fetchTodos(data,status) {
    
    return async function(dispatch, getState) {
        dispatch(getLoad(true))
        switch (status) {
            case 'submite':
                try {
                    const result = await axios.post("https://jsonplaceholder.typicode.com/todos", data)
                    dispatch(postTodos(result.data))
                } catch (err) {
                    dispatch(getError(err))
                }
            case 'delete':
                try {
                    const result = await axios.delete(`https://jsonplaceholder.typicode.com/todos ${data}`)
                } catch (err) {
                    dispatch(getError(err))
                }
                 break
        
            default:
                try {
                    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
                    dispatch(getTodos(result.data))
                } catch (err) {
                    dispatch(getError(err))
                }
                
        }     
        dispatch(getLoad(false))
    }
}