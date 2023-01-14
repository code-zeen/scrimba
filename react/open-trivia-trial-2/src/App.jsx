import React from "react"
import BtnCheck from "./components/btn-check"
import QuestionBlock from "./components/question-block"
import Title from "./components/title"

export default function App() {
  const [titleOn, setTitleOn] = React.useState(false)
  const [triviaData, setTriviaData] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => data.results.map(datum => ({
        ...datum,
        selectedAnswer: ""
      })))
      .then(formattedData => setTriviaData(formattedData))
  }, [])


  function startQuiz() {
    setTitleOn(prev => !prev)
  }

  console.log(triviaData)

  function handleChange(event) {
    const {name, value} = event.target
    setTriviaData(prev => prev.map(prev => {
      if (prev.question === name) {
        return {
          ...prev,
          selectedAnswer: value
        } 
      } else {
        return {
          ...prev
        }
      }
    })
    )
  }

  const questionElements = triviaData.map((datum, index) => {

    return (
      <QuestionBlock
        key={index}
        id={index}
        question={datum.question}
        correctAnswer={datum.correct_answer}
        incorrectAnswers={datum.incorrect_answers}
        selectedAnswer={datum.selectedAnswer}
        handleChange={handleChange}
      />
    )
  })

  return (
    <main>
      {titleOn && <Title handleClick={startQuiz}/>}
      {questionElements}
      <BtnCheck/>
    </main>
  )
}