import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../Context"

function Header(props) {
  const {darkTheme, setDarkTheme} = useContext(Context)

  function handleClick() {
    setDarkTheme(prev => !prev)
  }

  function renderThemeBtn() {
    return darkTheme ? "on" : "off"
  }

  return (
    <header className="header">
      <div className="theme-btn">
        <button onClick={() => handleClick()}>
          <i className={`fa fa-toggle-${renderThemeBtn()}`}></i>
        </button>
      </div>
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