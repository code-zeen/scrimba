import React from "react"

export default function Answers() {

  return (
    <div className="answers">
        <input type="radio" id="option-a" name="queston-one" value=""/>
        <label htmlFor="option-a">Adios</label>
        <input type="radio" id="option-b" name="queston-one" value=""/>
        <label htmlFor="option-b">Hola</label>
        <input type="radio" id="option-c" name="queston-one" value=""/>
        <label htmlFor="option-c">Au Revoir</label>
        <input type="radio" id="option-d" name="queston-one" value=""/>
        <label htmlFor="option-d">Salir</label>
    </div>
  )
}