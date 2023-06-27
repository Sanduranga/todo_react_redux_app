
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/todoActions'


export default function TodoUi() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    const handleDelete = (id) => {
        dispatch(fetchTodos(id, 'delete'))
    }

    const gotTodo = useSelector((state) => state.todo.todos) 

    return (
        <div className='flex flex-col items-center mt-5'>
            <h1 className='mb-5 font-bold'>My ToDo lists</h1>
            <table className='table border-collapse '>
                <tr>
                    <th className='p-4 bg-gray-200'>User id</th>
                    <th className='p-4 bg-gray-200'>Id</th>
                    <th className='p-4 bg-gray-200'>Title</th>
                    <th className='p-4 bg-gray-200'></th>
                </tr>
            
           
                {gotTodo.map((list) => (
                <tr key={list.id}>
                     <td className='p-4 bg-gray-100'>{list.userId}</td>
                     <td className='p-4 bg-gray-100'>{list.id}</td>
                     <td className='p-4 bg-gray-100'>{list.title}</td>
                     <td className='flex flex-row p-4 bg-gray-100'>
                        <div><input type='checkbox'></input></div>
                        <div><button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-5'>Ed</button></div>
                        <div><button onClick={() => handleDelete(list.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'>De</button></div>
                     </td>
                </tr>
                ))}
            </table>           
        </div>
    )
}