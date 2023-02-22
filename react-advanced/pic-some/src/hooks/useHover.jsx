import { useState, useEffect, useRef } from "react"

function useHover() {
  const [isHovered, setIsHovered] = useState(false)
  const hoverRef = useRef(null)

  function enter() {
    setIsHovered(true)
  }
  function leave() {
    setIsHovered(false)
  }

  return {isHovered, hoverRef, enter, leave}
}

export default useHover