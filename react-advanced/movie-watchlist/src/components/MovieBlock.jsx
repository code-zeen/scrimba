import React from "react"

function MovieBlock({result, addToWatchlist, removeFromWatchlist, myWatchlist}) {

  function renderBookmarkBtn() {
    const isInWatchlist = myWatchlist.some(movie => movie.imdbID === result.imdbID)
    if (isInWatchlist) {
      return <i className="fa fa-bookmark" onClick={() => removeFromWatchlist(result)}></i>
    } else {
      return <i className="fa fa-bookmark-o" onClick={() => addToWatchlist(result)}></i>
    }
  }

  return (
    <div className="movie-block">
      <div className="movie">
        <div className="image">
          <img src={result.Poster} alt={result.Title} />
        </div>
        <div className="movie-detail">
          <div className="title">
            <h3>{result.Title}</h3>
            <button className="add-to-list">
                {renderBookmarkBtn()}
            </button>
          </div>
          <div className="detail">
            <span className="year">{result.Year}</span>
            <span className="time">{result.Runtime}</span>
            <span className="genre">{result.Genre}</span>
            <div className="rating">
              <i className="fa fa-star"></i>
              <p>{result.imdbRating}</p>
            </div>
          </div>
          <div className="synopsis">
            <p>{result.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieBlock