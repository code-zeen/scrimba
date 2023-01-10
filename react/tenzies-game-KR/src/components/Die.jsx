import React from 'react'

export default function Die(props) {

  function dieFace() {
    switch(props.value) {
      case 1:
        return "one"
      case 2:
        return "two"
      case 3:
        return "three"
      case 4:
        return "four"
      case 5:
        return "five"
      case 6:
        return "six"
      default:
        break;
    }
  }
  
  return (
    <div 
      className={
        "die "
        + (props.isHeld ? "is-held " : "not-held ")
        + (dieFace())
      } 
      onClick={() => props.handleClick(props.id)}
    >
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  )
}