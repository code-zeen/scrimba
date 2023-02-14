import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

import SearchPage from "./components/SearchPage"
import MyPage from "./components/MyPage"

function App() {
  const [myWatchlist, setMyWatchlist] = useState([])

  return (
    <main>
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
