import React from 'react'
import "./Navbar.css"
import { memo } from 'react'

const Navbar = ({ adjective, getadjective }) => {
    console.log("the navbar is randered")
    return (
        <div>
            <nav>
                <img src="/src/assets/Logo-New-2.png" alt="" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About </a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            im a {adjective} navbar .
            <button onClick={()=>{getadjective()}}> {getadjective()} </button>
        </div>
    )
}





export default memo(Navbar);
