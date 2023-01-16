import React from "react"

export default function BtnCheck({ handleClick, isChecked}) {

  return (
    <button 
    className="btn-check" 
    onClick={handleClick}>
      {isChecked ? "New Quiz" : "Check Answers"}
    </button>
  )
}