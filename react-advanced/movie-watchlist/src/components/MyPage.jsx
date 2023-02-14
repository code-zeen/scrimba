import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../Context"
import Header from "./Header"
import MovieBlock from "./MovieBlock"

function MyPage() {
  // Global context
  const {
    myWatchlist,
    addToWatchlist,
    removeFromWatchlist
  } = useContext(Context)

  // Mini-component: Initial & Error UI
  function defaultEmptyResult() {
    return (
      <div className="empty">
        <i className="default fa fa-meh-o"></i>
        <p>Your watchlist is looking a little empty...</p>
        <Link to="/" className="link">
          <i className="fa fa-plus-circle"></i>
          <span>Let's add some movies!</span>
        </Link>
      </div>
    )
  }

  const myWatchlistElements = myWatchlist.map((movie, i) => {
    return (
      <MovieBlock
        key={i}
        result={movie}
        addToWatchlist={addToWatchlist}
        removeFromWatchlist={removeFromWatchlist}
        myWatchlist={myWatchlist}
        onIcon="fa-trash-o"
      />
    )
  })

  return (
    <div className="my-page">
      <Header title="My Watchlist" text="Search for movies" link="/" />
      <div className="content">
        {myWatchlist.length === 0 ? defaultEmptyResult() : myWatchlistElements}
      </div>
    </div>
  )
}

export default MyPage