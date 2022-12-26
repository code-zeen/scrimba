import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <img 
          src='../../src/assets/troll-face.png' 
          className='image'
        />
        <h2 className='title'>Meme Generator</h2>
        <h4 className='project'>Project 3</h4>
      </div>
    </header>
  )
}