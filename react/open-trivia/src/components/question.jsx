import React from "react";

export default function Question(props) {

  const [questionBlock, setquestionBlock] = React.useState(
    {
      id: props.id,
      question: props.question,
      answers: randomizeAnswers().map((answer, index) => (
        {
          id: index,
          value: answer,
          isChecked: false,
          isCorrect: answer === props.correctAnswer
        }
      ))
    }
  )
  console.log("****")
  console.log(questionBlock)

  // dangerously setting innter html
  function createMarkup(prop) {
    return {__html: prop};
  }

  function randNum() {
    return Math.floor(Math.random() * 4)
  }

  function randomizeAnswers() {
    const answersArray = props.incorrectAnswers
    if (answersArray.length === 3) {
      answersArray.splice(randNum(), 0, props.correctAnswer)
    } else if (props.correctAnswer === "True") {
      answersArray.splice(0, 0, props.correctAnswer)
    } else if (props.correctAnswer === "False") {
      answersArray.push(props.correctAnswer)
    }
    return answersArray
  }
  
  function handleChange(event) {
    const {name, value, checked} = event.target
    setquestionBlock(prevBlock => (
      {
        ...prevBlock,
        answers: prevBlock.answers.map(prevAnswer => {
          if (prevAnswer.value == [value]) {
            return {...prevAnswer, isChecked: true}
          } else {
            return {...prevAnswer, isChecked: false}
          }
        })
      }
    ))
  }

  const answerElements = questionBlock.answers.map((block, index) => {
    return (
      <div key={index}>
        <input 
          type="radio" 
          id={props.id + "" + index} 
          name={props.id} 
          value={block.value}
          checked={block.isChecked}
          onChange={handleChange}
        />
        <label 
          htmlFor={props.id + "" + index} 
          dangerouslySetInnerHTML={createMarkup(block.value)}>
        </label>
      </div>
    )
  })

  return (
    <div className="question">
      <h3 dangerouslySetInnerHTML={createMarkup(props.question)}></h3>
      <div className="answers">
        {answerElements}
      </div>
      
      <hr/>
    </div>
  )
}


// return (
//   <div className="question">
//     <h3 dangerouslySetInnerHTML={createMarkup(props.question)}></h3>
//     <div className="answers">
//       <input type="radio" id={props.id + "A"} name={props.id} value={props.correctAnswer}/>
//       <label htmlFor={props.id + "A"} dangerouslySetInnerHTML={createMarkup(props.correctAnswer)}></label>
//       <input type="radio" id={props.id + "B"} name={props.id} value={props.incorrectAnswers[0]}/>
//       <label htmlFor={props.id + "B"} dangerouslySetInnerHTML={createMarkup(props.incorrectAnswers[0])}></label>
//       <input type="radio" id={props.id + "C"} name={props.id} value={props.incorrectAnswers[1]}/>
//       <label htmlFor={props.id + "C"} dangerouslySetInnerHTML={createMarkup(props.incorrectAnswers[1])}></label>
//       <input type="radio" id={props.id + "D"} name={props.id} value={props.incorrectAnswers[2]}/>
//       <label htmlFor={props.id + "D"} dangerouslySetInnerHTML={createMarkup(props.incorrectAnswers[2])}></label>
//     </div>
//     <hr/>
//   </div>
// )
