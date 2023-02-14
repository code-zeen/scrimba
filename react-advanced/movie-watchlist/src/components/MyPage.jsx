import React, { useContext } from "react"

import { Context } from "../Context"
import Header from "./Header"
import MovieBlock from "./MovieBlock"

function MyPage() {
  // Global context
  const {
    myWatchlist,
    setMyWatchlist,
    addToWatchlist,
    removeFromWatchlist
  } = useContext(Context)

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
        {myWatchlistElements}
      </div>
    </div>
  )
}

export default MyPage