import React from "react"

export default function Answer({ questionIndex, index, correctAnswer, anyAnswer, selectedAnswer, handleChange }) {

  // dangerously setting innter html
  function createMarkup(prop) {
    return {__html: prop};
  }



  return (
    <div className={"answer " + (anyAnswer === correctAnswer ? "correct" : "incorrect")}>
        <input 
          type="radio" 
          id={questionIndex + "" + index} 
          name={questionIndex} 
          value={anyAnswer}
          checked={selectedAnswer === anyAnswer}
          onChange={handleChange}
        />
        <label 
          htmlFor={questionIndex + "" + index} 
          dangerouslySetInnerHTML={createMarkup(anyAnswer)}>
        </label>
    </div>
  )
}