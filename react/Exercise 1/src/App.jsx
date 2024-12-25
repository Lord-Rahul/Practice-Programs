// src/App.js
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"

function App() {


  const [data, setData] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();

    setData(response);
    console.log(response)
  };

  useEffect(() => {
    fetchData()
  }, [])

  const Card = ({prop}) => {
    return (
      <>
      <div className="card">
        <div className="userId">
          <h2> user id : {prop.userId}</h2>
        </div>
        <div className="title"> <h2>{prop.title} </h2> </div>
        <div className="desc">{prop.body}</div>
      </div>
      
      </>
    )

  }

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>Welcome to Baddi University</h1>
        <p>Where knowledge meets innovation.</p>
        <div className="cards">
          
          {data.map(item=>{
           return <Card key={item.id} prop={item}/> 
           })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
