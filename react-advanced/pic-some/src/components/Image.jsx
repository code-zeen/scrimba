import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import { Context } from "../Context"


function Image(props) {
  const [isHovered, setIsHovered] = useState(false)
  const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)

  function heartIcon() {
    if (props.img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    } else if (isHovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
  }

  function plusIcon() {
    const isInCart = cartItems.some(item => item.id === props.img.id)
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img)}></i>
    } else if (isHovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
    }
  } 
  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className="image-grid" 
        src={props.img.url}
      />
      {heartIcon()}
      {plusIcon()}
    </div>
  )
}

Image.propTypes =  {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
}

export default Image