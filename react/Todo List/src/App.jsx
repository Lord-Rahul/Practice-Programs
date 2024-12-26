import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'


  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit= ()=>{

  }

  const handleDelete= ()=>{
    
  }

  
  const handleAdd= (e)=>{
    setTodos([...todos,{todo?isCompleted:false}])
    setTodo("")
  }

  return (
    <>
      <Navbar />
      <div className="container w-auto mx-12  my-6 rounded-xl bg-teal-100 p-5 min-h-[80vh]">
        <div className="addTodo">
          <div className="text-lg font-bold"> Add a To-Do</div>
          <input className='w-1/2' type="text" />
          <button onClick={handleAdd} className='bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-6 p-3 py-1'>Add</button>

        </div>
        <div>
          <h2 className='text-lg font-bold '>Your To-Do's </h2>
        </div>
        <div className="todos">
          <div className="todo flex ">
            <div className="text"> {todo}</div>
            <div className="button">
              <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-6 p-3 py-1">edit</button>
              <button onClick={handleDelete} className='bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-6 p-3 py-1'>delete</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
