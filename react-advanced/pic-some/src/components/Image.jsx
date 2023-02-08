import React, { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

function Image(props) {
  const [isHovered, setIsHovered] = useState(false)
  const {allPhotos, toggleFavorite} = useContext(Context)

  function heartIcon() {
    if (props.img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    } else if (isHovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
  }

  const plusIcon = isHovered && <i className="ri-add-circle-line cart"></i>

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
      {plusIcon}
    </div>
  )
}

Image.propTypes =  {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
}

export default Image

// if (isFavorite) {
//   filled heart
// } else if (isHovered) {
//   line heart
// }