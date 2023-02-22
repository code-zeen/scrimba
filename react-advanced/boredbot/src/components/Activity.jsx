import React, { useContext } from "react"

import { Context } from "../Context"

function Activity() {
  const {boredData} = useContext(Context)

  return (
    <div className="activity">
      <h2>{boredData.activity}</h2>
      <div className="properties">
        <p>Type: {boredData.type}</p>
        <p>Accessibility: {boredData.accessibility}</p>
        <p>Price: {boredData.price}</p>
        <p>Participants: {boredData.participants}</p>
      </div>
    </div>
    
  )
}

export default Activity