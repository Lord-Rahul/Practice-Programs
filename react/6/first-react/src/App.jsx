import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import { Navbar, Footer } from './components//Navbar';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
       <Navbar/>
      hii welcome to first react app
      <div className='value'>
        {value}
      </div>
      <div className='button'>
        <button onClick={()=>{setValue(value+1)}}>
          click me !
        </button>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
