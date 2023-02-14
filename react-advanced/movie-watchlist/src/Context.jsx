import React, { useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [myWatchlist, setMyWatchlist] = useState([])

  // Add & Remove movies
  function addToWatchlist(movie) {
    setMyWatchlist(prev => [...prev, movie])
  }
  function removeFromWatchlist(movie) {
    setMyWatchlist(prev => prev.filter(myMovie => myMovie.imdbID !== movie.imdbID))
  }

  return (
    <Context.Provider value={{
      myWatchlist,
      setMyWatchlist,
      addToWatchlist,
      removeFromWatchlist
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }