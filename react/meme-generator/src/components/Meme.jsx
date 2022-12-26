import React from 'react'

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: '',
    botText: '',
    imgUrl: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {
    setMeme(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevState => ({
      ...prevState,
      imgUrl: url
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          className='input'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='input'
          name='botText'
          value={meme.botText}
          onChange={handleChange}
        />
        <button
          className='button'
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div className='meme'>
        <img
          src={meme.imgUrl}
          className='image'
        />
        <h2 className='text top'>{meme.topText}</h2>
        <h2 className='text bot'>{meme.botText}</h2>
      </div>
    </main>
  )
}