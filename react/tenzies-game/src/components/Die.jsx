import React from 'react'

export default function Die(props) {

  return (
    <div className={"die " + (props.isHeld ? "is-held" : "not-held")} onClick={() => props.handleClick(props.id)}>
      {props.value}
    </div>
  )
}