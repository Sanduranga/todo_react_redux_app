
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/todoActions'


export default function TodoUi() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    const gotTodo = useSelector((state) => state.todo.todos) 

    return (
        <div>
            <h1>My ToDo lists</h1>
            <div>
                {gotTodo.map((list) => (
                    <div key={list.id}>{list.title}</div>
                ))}
            </div>
        </div>
    )
}