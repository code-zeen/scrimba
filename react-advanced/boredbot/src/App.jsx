import React, { useState, useEffect, useContext } from 'react'

import Activity from './components/Activity'
import { Context } from "./Context"

function App() {
  const {getNewActivity, darkTheme, toggleDarkMode} = useContext(Context)

  return (
    <main className={`${darkTheme ? "dark-theme" : ""} main-app`}>
      <div className="logo">🤖</div>
      <h1>Welcome to BoredBot</h1>
      <h4>Find something to do</h4>
      <Activity />
      <button onClick={() => getNewActivity()} className="bored-btn">I am bored</button>
      <button onClick={() => toggleDarkMode()} className="theme-btn">Switch to {darkTheme ? "light" : "dark"} theme</button>
    </main>
  )
}

export default App
