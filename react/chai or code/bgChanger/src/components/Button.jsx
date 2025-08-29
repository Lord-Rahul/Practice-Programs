import React, { useState } from 'react'
const click = (color)=>{
document.querySelector('body').style.backgroundColor = `${color}`  
}
const Button = ({color='pink'}) => {
  return (
    <div>
      <button className="rounded-xl w-15 border-2 bg-amber-300 m-6 hover:bg-amber-500" onClick={click({color})}>{color}</button>
    </div>
  )
}

export default Button
