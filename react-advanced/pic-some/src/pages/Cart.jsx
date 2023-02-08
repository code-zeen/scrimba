import React, { useContext } from "react"

import { Context } from "../Context"

function Cart() {
  const {cartItems} = useContext(Context)

  const cartElements = cartItems.map(item => {
    return (
      <div>
        <img key={item.id} src={item.url} width="200px"/>
        {/* <p>Remove</p> */}
      </div>
    )
    
  })
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElements}
    </main>
  )
}

export default Cart