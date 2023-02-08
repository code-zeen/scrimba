import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
  const {cartItems} = useContext(Context)
  
  function shoppingCart() {
    if (cartItems.length > 0) {
      return <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link>
    } else {
      return <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
    }
  }
  return (
    <header>
      <h2><Link to="/">Pic Some</Link></h2>
      {shoppingCart()}
    </header>
  )
}

export default Header