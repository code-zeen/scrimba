import React from "react"
import { Link } from "react-router-dom"

function Header(props) {

  return (
    <header className="header">
      <div className="text">
        <h2>{props.title}</h2>
        <Link to={props.link} className="link">
          <span>{props.text}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header