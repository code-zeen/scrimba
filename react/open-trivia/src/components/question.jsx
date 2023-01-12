import React from "react";

export default function Question(props) {

  return (
    <div className="question">
      <h3>{props.question}</h3>
      <div className="answers">
        <input type="radio" id={props.id + "answerA"} name={props.id} value="adios"/>
        <label htmlFor={props.id + "answerA"}>Adios</label>
        <input type="radio" id={props.id + "answerB"} name={props.id} value="hola"/>
        <label htmlFor={props.id + "answerB"}>Hola</label>
        <input type="radio" id={props.id + "answerC"} name={props.id} value="Au Revoir"/>
        <label htmlFor={props.id + "answerC"}>Au Revoir</label>
        <input type="radio" id={props.id + "answerD"} name={props.id} value="Salir"/>
        <label htmlFor={props.id + "answerD"}>Salir</label>
      </div>
      <hr/>
    </div>
  )
}