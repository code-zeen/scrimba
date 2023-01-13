import React from "react"
import BtnCheck from "./components/btn-check"
import QuestionBlock from "./components/question-block"
import Title from "./components/title"

export default function App() {

  return (
    <main>
      {/* <Title/> */}
      <QuestionBlock/>
      <QuestionBlock/>
      <QuestionBlock/>
      <QuestionBlock/>
      <BtnCheck/>
    </main>
  )
}