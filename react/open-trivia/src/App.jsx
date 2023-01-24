import React from 'react'
import Question from './components/question'
import Title from './components/title'

export default function App() {

  const [title, setTitle] = React.useState(true)
  const [triviaData, setTriviaData] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json()) 
      .then(data => setTriviaData(data.results))
  }, [])

  const questionElements = triviaData.map((datum, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={datum.question}
        correctAnswer={datum.correct_answer}
        incorrectAnswers={datum.incorrect_answers}
      />
    )
  })

  function startQuiz() {
    setTitle(prevState => !prevState)
  }

  return (
    <main>
      {title && <Title handleClick={startQuiz}/>}
      {!title && questionElements}
      {!title && <button className="btn-check">Check Answers</button>}
    </main>
  )
}