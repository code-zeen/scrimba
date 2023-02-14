import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const storedWatchlist = JSON.parse(sessionStorage.getItem("myWatchlist"))
  const [myWatchlist, setMyWatchlist] = useState(storedWatchlist ? storedWatchlist : [])
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [darkTheme, setDarkTheme] = useState(true)

  // Update session storage
  useEffect(() => {
    sessionStorage.setItem("myWatchlist", JSON.stringify(myWatchlist))
  }, [myWatchlist])

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
      setErrorMessage,
      darkTheme,
      setDarkTheme
    }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }