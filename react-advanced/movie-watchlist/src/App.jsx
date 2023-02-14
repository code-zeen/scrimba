import React from "react"
import { Routes, Route } from "react-router-dom"

import SearchPage from "./components/SearchPage"
import MyPage from "./components/MyPage"

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </main>
  )
}

export default App
