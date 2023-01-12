import React from 'react'
import Question from './components/question'
import Title from './components/title'

export default function App() {

  const [title, setTitle] = React.useState(false)
  const [triviaData, setTriviaData] = React.useState({})

  React.useEffect(function() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setTriviaData(data))
  }, [])
  
  function startQuiz() {
    setTitle(prevState => !prevState)
  }

  return (
    <main>
      {title && <Title handleClick={startQuiz}/>}
      <Question/>
    </main>
  )
}