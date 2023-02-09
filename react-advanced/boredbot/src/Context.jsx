import React, { useState, createContext } from "react"

const Context = createContext()

function ContextProvider(props) {
  const [boredData, setBoredData] = useState({})

  function getNewActivity() {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => setBoredData(data))
  }

  return (
    <Context.Provider value={{boredData, getNewActivity}}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }