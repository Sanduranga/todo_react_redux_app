import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/todoActions'
import TodoUi from '../components/TodoUi'
import axios from 'axios'

export default function FormInputs() {

    const dispatch = useDispatch()

    const [inputData, setInputData] = useState({userId: '',id: '',title: '',completed:''})
    const [editMode, setEditMode] = useState(false)
    const [updateTaskId, setUpdateTaskId] = useState(0)


    const {userId, id, title,} = inputData

    const todoState = useSelector((state) => state.todo.todos)

    const handleInput = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      
        dispatch(fetchTodos(inputData,'submit',null))
        setInputData({userId: '',id: '',title: ''})
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        
        dispatch(fetchTodos(inputData,'update',updateTaskId))
        setInputData({userId: '',id: '',title: ''})
        setEditMode(false)
    }

    const handleEdit = (editTaskId) => { 
        axios.get(`https://jsonplaceholder.typicode.com/todos/${editTaskId}`)
        .then(result => { setInputData(result.data)})
        setEditMode(true)  
        setUpdateTaskId(editTaskId)
    }

    const handleCheck = (id) => {
        const arrayId = id - 1
        const checkedObj = todoState[arrayId]
        checkedObj.completed === true ? checkedObj.completed = false : checkedObj.completed = true
        console.log(checkedObj)
        dispatch(fetchTodos(checkedObj, 'check', id))
    }

    return (
        <div>
            {editMode? (
            <form onSubmit={handleUpdate} className='flex flex-col items-center mt-10'>
                <input onChange={handleInput} value={userId} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter user id..." type="number" name="userId"></input>
                <input onChange={handleInput} value={id} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter task id..." type="number" name="id"></input>
                <input onChange={handleInput} value={title} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="What to do ?" type="text" name="title"></input>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2'>Update</button>
            </form>) : title.length > 0 ? (
                <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
                    <input onChange={handleInput} value={userId} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter user id..." type="number" name="userId"></input>
                    <input onChange={handleInput} value={id} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter task id..." type="number" name="id"></input>
                    <input onChange={handleInput} value={title} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="What to do ?" type="text" name="title"></input>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2'>Submit</button>
                </form>) : userId.length > 0 && id.length ? (
                    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
                        <input onChange={handleInput} value={userId} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter user id..." type="number" name="userId"></input>
                        <input onChange={handleInput} value={id} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter task id..." type="number" name="id"></input>
                        <input onChange={handleInput} value={title} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="What to do ?" type="text" name="title"></input>
                    </form>) :
                        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
                            <input onChange={handleInput} value={userId} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter user id..." type="number" name="userId"></input>
                            <input onChange={handleInput} value={id} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter task id..." type="number" name="id"></input>             
                        </form>}


            <TodoUi editTaskId={handleEdit}
                    checkTaskId={handleCheck} 
            />

        </div>
    )
}