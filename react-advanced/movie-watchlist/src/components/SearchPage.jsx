import React from "react"

function SearchPage() {


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
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Search for a movie" />
          <button>Search</button>
        </div>
          <div className="movies">
            <i class="fa fa-film"></i>
            <p>Start Exploring</p>
          </div>
      </div>
    </div>
  )
}

export default SearchPage