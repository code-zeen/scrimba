import React, { useContext } from "react"

import { Context } from "../Context"

function CartItem(props) {
  const {removeFromCart} = useContext(Context)

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={() => removeFromCart(props.item)}></i>
      <img src={props.item.url} width="180px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem