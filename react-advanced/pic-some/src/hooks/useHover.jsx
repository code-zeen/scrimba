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

  useEffect(() => {
    hoverRef.current.addEventListener("mouseenter", enter)
    hoverRef.current.addEventListener("mouseleave", leave)

    return () => {
      hoverRef.current.removeEventListener("mouseenter", enter)
      hoverRef.current.removeEventListener("mouseleave", leave)
    }
  }, [])

  return {isHovered, hoverRef}
}

export default useHover