import React from "react";

export default function Question() {
  return (
    <div className="question">
      <h3>How would one say goodbye in Spanish?</h3>
      <div className="answers">
        <input type="radio" id="one" name="q1" value="adios"/>
        <label htmlFor="one">Adios</label>
        <input type="radio" id="two" name="q1" value="hola"/>
        <label htmlFor="two">Hola</label>
        <input type="radio" id="three" name="q1" value="Au Revoir"/>
        <label htmlFor="three">Au Revoir</label>
        <input type="radio" id="four" name="q1" value="Salir"/>
        <label htmlFor="four">Salir</label>
      </div>
      <hr/>
    </div>
  )
}