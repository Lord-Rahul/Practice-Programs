import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true)
  const [todos, setTodos] = useState([{
    title: "hey",
    desc: "tere maa ki jay ho bharose wale"
  },
  {
    title: "hey",
    desc: "tere maa ki jay ho delhi wale"
  },
  {
    title: "hey",
    desc: "tere maa ki jay ho chandigarh wale"
  },
  {
    title: "hey",
    desc: "tere maa ki jay ho banaras wale"
  }
])

  const Todo= ({todos}) => {
    return (
      <>
        <div className="todo">
          {todos.title}
        </div>
        <div className="desc">
          {todos.desc}</div>
      </>
    )
  }


return (
  <>
    <div>
      {todos.map(todos=>{
        return<Todo key={todos.desc} todos={todos}/>

      })}
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setShowbtn(!showbtn)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p>i will be shown only when condition is true</p>
    {/* {showbtn?<button>Hey buddy </button>:"thenga"} */}
    {showbtn && <button>Hey buddy </button>}

    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
)
}

export default App
