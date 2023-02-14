import React, { useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [myWatchlist, setMyWatchlist] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

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
      removeFromWatchlist,
      searchInput,
      setSearchInput,
      searchResult,
      setSearchResult,
      errorMessage,
      setErrorMessage
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }