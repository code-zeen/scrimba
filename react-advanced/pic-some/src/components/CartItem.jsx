import React, { useContext, useState } from "react"

import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem(props) {
  const {isHovered, hoverRef} = useHover()

  const {removeFromCart} = useContext(Context)

  const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
  return (
    <div className="cart-item">
      <i 
        className={iconClassName} 
        onClick={() => removeFromCart(props.item)}
        ref={hoverRef}
      ></i>
      <img src={props.item.url} width="180px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem