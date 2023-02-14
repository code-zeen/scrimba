import React, { useContext, useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Context } from "./Context"
import SearchPage from "./components/SearchPage"
import MyPage from "./components/MyPage"

function App() {
  const { darkTheme } = useContext(Context)

  const [myWatchlist, setMyWatchlist] = useState([])

  return (
    <main className={darkTheme ? "dark-theme" : ""}>
      <Routes>
        <Route path="/" element={
          <SearchPage />
        } />
        <Route path="/mypage" element={
          <MyPage myWatchlist={myWatchlist} setMyWatchlist={setMyWatchlist}/>
        } />
      </Routes>
    </main>
  )
}

export default App
