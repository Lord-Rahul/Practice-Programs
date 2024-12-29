import React,{ useContext } from 'react'
import { counterContext } from '../context/context'



// const Component1 = (props) => {
const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
      {/* {props.count} */}
      {value.count}
    </div>
  )
}

export default Component1
