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
      />
    )
  })

  return (
    <div>
      <Header title="My Watchlist" text="Search for movies" link="/" />
      {myWatchlistElements}
    </div>
  )
}

export default MyPage