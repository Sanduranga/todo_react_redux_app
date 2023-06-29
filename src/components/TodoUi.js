
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/todoApp/todoActions'


export default function TodoUi({editTaskId, checkTaskId}) {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    const handleDelete = (id) => {
        dispatch(fetchTodos(null, 'delete', id))
    }

    const handleEdit = (id) => {  
        editTaskId(id)
    }

    const handleCheck = (id) => {  
        checkTaskId(id)
    }

    const {todos, loading,} = useSelector((state) => state.todo) 

    if (loading) return <div className='flex flex-col items-center mt-5 font-bold'>Loading....</div>

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
            
           
                {todos.map((list) => (
                <tr key={list.id}>
                     <td className='p-4 bg-gray-100'>{list.userId}</td>
                     <td className='p-4 bg-gray-100'>{list.id}</td>
                     <td className='p-4 bg-gray-100'>{list.title}</td>
                     <td className='flex flex-row p-4 bg-gray-100'>
                        <div><input onChange={() => handleCheck(list.id)} type='checkbox'></input></div>
                        <div><button onClick={() => handleEdit(list.id)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-5'>Ed</button></div>
                        <div><button onClick={() => handleDelete(list.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'>De</button></div>
                     </td>
                </tr>
                ))}
            </table>           
        </div>
    )
}