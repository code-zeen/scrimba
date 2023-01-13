import React from "react"

export default function Answer({qIndex, index, value}) {

  return (
    <div className="answer">
        <input type="radio" id={qIndex + "" + index} name={qIndex} value={value}/>
        <label htmlFor={qIndex + "" + index}>{value}</label>
    </div>
  )
}