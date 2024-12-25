import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("RAHUL")
  const [form, setForm] = useState({ name: "", phone: "" })

  const handleclick = () => {
    alert("i m clicked")

  }
  const mouseo = () => {
    console.log("mouse scrolled")
  }
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click me</button>
      </div>
      <div onMouseOver={mouseo} className="box"></div>
      <div className="input">
        {/* <input type="text" value={name} onChange={handleChange} />
      </div><div> */}
        <input type="text" name='name' value={form.name?form.name:""} onChange={handleChange} />
      </div>
      <div>
        <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />

      </div>
    </>
  )
}

export default App
