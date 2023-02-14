import React, { useState, useContext } from "react"

import { Context } from "../Context"
import Header from "./Header"
import MovieBlock from "./MovieBlock"

function SearchPage() {
  // Global context
  const {
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
    } = useContext(Context)

  const [isLoading, setIsLoading] = useState(false)

  // Controlled input component
  function handleChange(event) {
    const {value} = event.target
    setSearchInput(value)
  }

  // Call API on assigned btn click
  function search(e) {
    e.preventDefault()
    setIsLoading(true)
    setSearchResult([])
    fetch(`https://www.omdbapi.com/?apikey=aa0556e0&s=${searchInput}`)
      .then(res => res.json())
      .then(data => {
        if (!data.Search) {
          console.log(data.Error)
          setErrorMessage(data.Error)
        } else {
          getMovieById(data)
        }
      })
    setTimeout(() => setIsLoading(false), 900)
  }

  function getMovieById(moviesData) {
    moviesData.Search.map(movie => {
      fetch(`https://www.omdbapi.com/?apikey=aa0556e0&i=${movie.imdbID}`)
        .then(res => res.json())
        .then(data => {
          setSearchResult(prev => [
            ...prev,
            data
          ])
        })
    })
  }

  // Mini-component: Search bar
  function searchBar() {
    return (
      <div className="search">
        <div className="search-bar">
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
      </div>
    )
  }

  // Mini-component: Initial & Error UI
  function defaultEmptyResult() {
    return (
      <div className="empty">
        <i className="default fa fa-film"></i>
        <p>{errorMessage? errorMessage : "Start Exploring"}</p>
      </div>
    )
  }
  function loadingSearch() {
    return (
      <div className="empty">
        <i className="default fa fa-spinner"></i>
        <p>Searching...</p>
      </div>
    )
  }

  // Content render logic REVISIT!!!
  function renderContent() {
    if (isLoading) {
      return loadingSearch()
    } else if (searchResult.length > 0){
      return searchResultElements
    } else {
      return defaultEmptyResult()
    }
  }

  // Search results
  const searchResultElements = searchResult.map((result, i) => {
    return (
      <MovieBlock
        key={i}
        result={result}
        onIcon="fa-bookmark"
        offIcon="fa-bookmark-o"
      />
    )
  })

  return (
    <div  className="search-page">
      <Header 
        title="Find your film" 
        text="My Watchlist" 
        link="/mypage"
      />
      {searchBar()}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  )
}

export default SearchPage