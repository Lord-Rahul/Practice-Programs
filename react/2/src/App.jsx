import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(69)

  return (
    <>
     <div>The count is {count}</div>
     <button  onClick={()=>{setCount(count+1)}}> click me</button>
    </>
  )
}

export default App
