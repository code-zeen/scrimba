import React, { useState, createContext } from "react"

const Context = createContext()

function ContextProvider(props) {
  const [boredData, setBoredData] = useState({})
  const [darkTheme, setDarkMode] = useState(true)

  function getNewActivity() {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => setBoredData(data))
  }

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <Context.Provider value={{boredData, getNewActivity, darkTheme, toggleDarkMode}}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }