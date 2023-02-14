import React, { useState } from "react"

import Header from "./Header"
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

  function search(e) {
    e.preventDefault()
    setSearchResult([])
    fetch(`http://www.omdbapi.com/?apikey=aa0556e0&s=${searchInput}`)
      .then(res => res.json())
      .then(data => {
        if (!data.Search) {
          console.log(data.Error)
          setErrorMessage(data.Error)
        } else {
          getMovieById(data)
        }
      })
  }

  function getMovieById(moviesData) {
    moviesData.Search.map(movie => {
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

  function addToWatchlist(movie) {
    console.log("clicked")
    setMyWatchlist(prev => [
      ...prev,
      movie
    ])
    console.log(myWatchlist)
  }

  function removeFromWatchlist(movie) {
    setMyWatchlist(prev => prev.filter(myMovie => myMovie.imdbID !== movie.imdbID))
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
        result={result}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        myWatchlist={myWatchlist}
      />
    )
  })

  return (
    <div>
      <Header title="Find your film" text="My Watchlist" link="/mypage"/>
      <div className="search">
          <i className="fa fa-search"></i>
          <form>
            <input 
              type="text" 
              id="search-bar"
              placeholder="Search for a movie"
              onChange={handleChange}
              value={searchInput}
              autoFocus
            />
            <button onClick={search}>Search</button>
          </form>
        </div>
      <div className="content">
        {searchResult.length === 0 ? defaultEmptyResult() : searchResultElements}
      </div>
    </div>
  )
}

export default SearchPage