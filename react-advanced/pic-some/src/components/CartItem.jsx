import React, { useContext, useState } from "react"

import { Context } from "../Context"

function CartItem(props) {
  const [isHovered, setIsHovered] = useState(false)
  const {removeFromCart} = useContext(Context)

  const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
  return (
    <div className="cart-item">
      <i 
        className={iconClassName} 
        onClick={() => removeFromCart(props.item)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></i>
      <img src={props.item.url} width="180px" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem