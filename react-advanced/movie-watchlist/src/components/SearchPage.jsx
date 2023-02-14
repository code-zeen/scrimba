import React, { useState } from "react"
import MovieBlock from "./MovieBlock"

function SearchPage() {
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [myWatchlist, setMyWatchlist] = useState([])

  function handleChange(event) {
    const {value} = event.target
    setSearchInput(value)
  }

  function search() {
    setSearchResult([])
    fetch(`http://www.omdbapi.com/?apikey=aa0556e0&s=${searchInput}`)
      .then(res => res.json())
      .then(data => {
        if (!data.Search) {
          console.log(data.Error)
          setErrorMessage(data.Error)
        } else {

          data.Search.map(movie => {
            fetch(`http://www.omdbapi.com/?apikey=aa0556e0&i=${movie.imdbID}`)
              .then(res => res.json())
              .then(data => {
                setSearchResult(prev => [
                  ...prev,
                  data
                ])
              })
          })
        }
      })
  }

  console.log(searchResult)

  function addToWatchlist(movie) {
    console.log("clicked")
    setMyWatchlist(prev => [
      ...prev,
      movie
    ])
    console.log(myWatchlist)
  }

  function defaultEmptyResult() {
    return (
      <div className="movies">
        <i className="fa fa-film"></i>
        <p>Start Exploring</p>
      </div>
    )
  }
  const searchResultElements = searchResult.map((result, i) => {
    return (
      <MovieBlock
        key={i}
        addToWatchlist={addToWatchlist}
        result={result}
      />
    )
  })


  return (
    <div>
      <header className="header">
        <div className="links">
          <h2>Find your film</h2>
          <button>My Watchlist</button>
        </div>
      </header>
      <div className="content">
        <div className="search">
          <i className="fa fa-search"></i>
          <input 
            type="text" 
            placeholder="Search for a movie"
            onChange={handleChange}
            value={searchInput}
          />
          <button onClick={search}>Search</button>
        </div>
      </div>
      {searchResultElements}
    </div>
  )
}

export default SearchPage