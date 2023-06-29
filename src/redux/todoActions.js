import axios from "axios"
import { getLoadTodo, getSuccessedTodo, getErrorTodo, postSuccessTodo, updateTodo, checkedObjTodo, checkedErrTodo, updateErrTodo, deleteErrTodo } from "./actionTypes"

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
export function updateTodos(results) {
    return {
        type: updateTodo,
        payload: results,
    }
}
export function updateErr(err) {
    return {
        type: updateErrTodo,
        payload: err,
    }
}
export function checkedObj(results) {
    return {
        type: checkedObjTodo,
        payload: results,
    }
}
export function checkedErr(err) {
    return {
        type: checkedErrTodo,
        payload: err,
    }
}
export function deleteErr(err) {
    return {
        type: deleteErrTodo,
        payload: err,
    }
}


export function fetchTodos(inputData, status, id) {
    
    return async function(dispatch, getState) {

        dispatch(getLoad(true))

        switch (status) {
            case 'submit':
                try {
                    const result = await axios.post("https://jsonplaceholder.typicode.com/todos", inputData)
                    dispatch(postTodos([result.data]))
                } catch (err) {
                    dispatch(getError(err))
                }
                break
            case 'delete':
                try {
                    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                } catch (err) {
                    dispatch(deleteErr(err))
                }
                break
            case 'update':
                try {
                    const result = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, inputData)
                    dispatch(updateTodos([result.data]))
                } catch (err) {
                    dispatch(updateErr(err))
                }
                break
            case 'check':
                try {
                    const result = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, inputData)
                    dispatch(checkedObj(result.data))
                } catch (err) {
                    dispatch(checkedErr(err))
                }
                break
            default:
                try {
                    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
                    dispatch(getTodos(result.data))
                } catch (err) {
                    dispatch(getError(err))
                }
                break              
        }     

        dispatch(getLoad(false))
        
    }
}