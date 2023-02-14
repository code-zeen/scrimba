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

  // Controlled input component
  function handleChange(event) {
    const {value} = event.target
    setSearchInput(value)
  }

  // Call API on assigned btn click
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

  // Mini-component: Initial page
  function defaultEmptyResult() {
    return (
      <div className="movies">
        <i className="fa fa-film"></i>
        <p>Start Exploring</p>
      </div>
    )
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
        {searchResult.length === 0 ? defaultEmptyResult() : searchResultElements}
      </div>
    </div>
  )
}

export default SearchPage