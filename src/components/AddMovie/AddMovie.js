import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
const url = 'https://x8ki-letl-twmt.n7.xano.io/api:IfVZxnbG/movies'
const AddMovie = () => {
  const ganreInput = useRef(null)
  const pictureInput = useRef(null)
  const starInput = useRef(null)
  const castInput = useRef(null)
  const [ganres, setGanres] = useState([])
  const [pictures, setPictures] = useState([])
  const [stars, setStars] = useState([])
  const [cast, setCast] = useState([])
  const [movieInfo, setMovieInfo] = useState({
    nameEn: '',
    nameFa: '',
    imdb: '',
    type: '',
    episodeNum: '',
    episodeName: '',
    year: '',
    ganre: [],
    quality: '',
    country: '',
    director: '',
    star: [],
    story: '',
    age: '',
    poster: '',
    trailer: '',
    picture: [],
    cast: []
    
  })
  useEffect(() => {
  }, [])
  const postDataHandler = event => {
    event.preventDefault()
    console.log(movieInfo)
   axios.post(url, movieInfo)
    .then(response => console.log(response))
  }
  const inputHandler = event => {
    setMovieInfo({
      ...movieInfo,
      [event.target.name]: event.target.value
    })
  }
  const addGanreHandler = (event) => {
    event.preventDefault()
    setGanres(prevState => [...prevState, ganreInput.current.value])
    setMovieInfo({
      ...movieInfo,
      ganre: ganres
    })
  }
  const addPictureHandler = (event) => {
    event.preventDefault()
    setPictures(prevState => [...prevState, pictureInput.current.value])
    setMovieInfo({
      ...movieInfo,
      picture: pictures
    })
  }
  const addStarsHandler = (event) => {
    event.preventDefault()
    setStars(prevState => [...prevState, starInput.current.value])
    setMovieInfo({
      ...movieInfo,
      star: stars
    })
  }
  const addCastHandler = (event) => {
    event.preventDefault()
   const id = castInput.current.children[0].value
   const name = castInput.current.children[1].value
   const photo = castInput.current.children[2].value
   const newCast = {
     id: id,
     name: name,
     photo: photo
   }
   setCast(prevState => [...prevState, JSON.stringify(newCast)])
    setMovieInfo({
      ...movieInfo,
      cast: cast
    })
    console.log(movieInfo)
  }
  return(
    <section>
     <form>
     <h2>Base Info</h2>
      <input 
        className="commentInput h-15"
        name="nameEn"
        value={movieInfo.nameEn}
        onChange={inputHandler}
        placeholder="Movie Name (English)"/>
      <input 
        className="commentInput h-15"
        name="nameFa"
        value={movieInfo.nameFa}
        onChange={inputHandler}
        placeholder="Movie Name (Persian)"/>
      <input 
        className="commentInput h-15"
        name="imdb"
        value={movieInfo.imdb}
        onChange={inputHandler}
        placeholder="IMDB Score"/>
      <input 
        className="commentInput h-15"
        name="type"
        value={movieInfo.type}
        onChange={inputHandler}
        placeholder="Type"/>
      <input 
        className="commentInput h-15"
        name="episodeNum"
        value={movieInfo.episodeNum}
        onChange={inputHandler}
        placeholder="Episode Number"/>
      <input 
        className="commentInput h-15"
        name="year"
        value={movieInfo.year}
        onChange={inputHandler}
        placeholder="Year of Publish"/>
      <input 
        className="commentInput h-15"
        name="episodeName"
        value={movieInfo.episodeName}
        onChange={inputHandler}
        placeholder="Episode Name"/>
      <input 
        className="commentInput h-15"
        name="quality"
        value={movieInfo.quality}
        onChange={inputHandler}
        placeholder="Quality"/>
      <input 
        className="commentInput h-15"
        name="country"
        value={movieInfo.country}
        onChange={inputHandler}
        placeholder="Country"/>
      <input 
        className="commentInput h-15"
        name="director"
        value={movieInfo.director}
        onChange={inputHandler}
        placeholder="Director"/>
      <input 
        className="commentInput h-15"
        name="age"
        value={movieInfo.age}
        onChange={inputHandler}
        placeholder="Age Limit"/>
      <input 
        className="commentInput h-15"
        name="poster"
        value={movieInfo.poster}
        onChange={inputHandler}
        placeholder="Poster"/>
      <input 
        className="commentInput h-15"
        name="trailer"
        value={movieInfo.trailer}
        onChange={inputHandler}
        placeholder="Trailer"/>
      <textarea 
        className="commentInput h-40 resize-none"
        name="story"
        value={movieInfo.story}
        onChange={inputHandler}
        placeholder="Story"/>
     <h2>Ganres: {movieInfo.ganre.map(item => item)}</h2>
      <input 
        className="commentInput h-15"
        name="ganre"
        ref={ganreInput}
        placeholder="Ganres"/>
     <button 
     onClick={addGanreHandler}
     className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Add Ganre</span></button>
     <h2>Stars {movieInfo.star.map(item => item)}</h2>
      <input 
        name="star"
        ref={starInput}
        className="commentInput h-15"
        placeholder="Stars"/>
     <button 
     onClick={addStarsHandler}
     className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Add Stars</span></button>
     <h2>Pictures {movieInfo.picture.map(item => item)}</h2>
      <input 
        name="pictures"
        ref={pictureInput}
        className="commentInput h-15"
        placeholder="Pictures"/>
     <button 
     onClick={addPictureHandler}
     className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Add Pictures</span></button>
      <h1>Cast:</h1>
     <div ref={castInput}>
      <input 
        name="id"
        className="commentInput h-15"
        placeholder="ID"/>
      <input 
        name="name"
        className="commentInput h-15"
        placeholder="Name"/>
      <input 
        name="photo"
        className="commentInput h-15"
        placeholder="Photo"/>
     </div>
     <button 
     onClick={addCastHandler}
     className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Add Cast</span></button>
          <button 
            onClick={postDataHandler}
            className="flex w-full justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Add Movie</span></button>
     </form>
    </section>
    )
}

export default AddMovie;