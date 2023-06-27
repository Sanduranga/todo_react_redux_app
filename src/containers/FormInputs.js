import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../redux/todoActions'

export default function FormInputs() {

    const dispatch = useDispatch()

    const [inputData, setInputData] = useState({userId: '',id: '',title: '',completed:''})

    const {userId, id, title,completed} = inputData

    const handleInput = (e) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputData)
        dispatch(fetchTodos(inputData,'delete'))
        setInputData({userId: '',id: '',title: ''})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
                <input onChange={handleInput} value={userId} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter user id..." type="number" name="userId"></input>
                <input onChange={handleInput} value={id} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="Enter task id..." type="number" name="id"></input>
                <input onChange={handleInput} value={title} className='placeholder:italic mb-3 placeholder:text-slate-400 block bg-white border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-1/2' placeholder="What to do ?" type="text" name="title"></input>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2'>Submit</button>
            </form>
        </div>
    )
}