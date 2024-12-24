import { useEffect } from "react"
import { useState } from "react"
import React from 'react'

const Navbar = ({color}) => {


  useEffect(() => {
    alert("color is changed !")

    
  }, [color])
  
  
  return (
    <div>
        i m a Navbar of {color} color ..""..
    </div>
  )
}

export default Navbar