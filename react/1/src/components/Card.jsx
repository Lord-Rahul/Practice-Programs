import React from "react"
import "./navbar.css"
const Card = (props) => {
    return (
      <div className="container">
        <div className="card">
          <h1>
              {props.tittle}
          </h1>
          <p>{props.desc}</p>
        </div>
      </div>
    )
  }

  export default Card;