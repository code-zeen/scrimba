import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
      const newPhotos = allPhotos.map(photo => {
        if (photo.id === id) {
          return {...photo, isFavorite: !photo.isFavorite}
        } else {
          return {...photo}
        }
      })
      setAllPhotos(newPhotos)
    }

    function addToCart(imgObj) {
      setCartItems(prev => [...prev, imgObj])
    }
    function removeFromCart(imgObj) {
      const updatedCartItems = cartItems.filter(item => item.id !== imgObj.id)
      setCartItems(updatedCartItems)
    }

    console.log(cartItems)
  return ( 
    <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart}}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }