import React, { useContext } from "react"
import Image from "../components/Image"
import { getClass } from "../utils/index"
import { Context } from "../Context"

function Photos() {

  const {allPhotos} = useContext(Context)
  
  const photoElements = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)}/>
  ))
  return (
    <main className="photos">
      {photoElements}
    </main>
  )
}

export default Photos