import React, { useContext } from 'react'
import { counterContext } from '../context/context'
import Component1 from './component1'

// const Button = (props) => {
const Button = () => {
    const value = useContext(counterContext)
    return (
        <div>
            <button onClick={() => value.setCount((count) => count + 1)}><span>
                {/* <Component1 count={props.count}/></span>button</button> */}
                <Component1 /></span>button</button>
        </div>
    )
}

export default Button
