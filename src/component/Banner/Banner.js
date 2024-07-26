import React, { useEffect, useState } from 'react'
import  './Banner.css'
import axios from '../../axios.js'
function Banner() {
  const [movie,setMovie] =useState();

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://movies-api14.p.rapidapi.com/shows',
      headers: { 
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com',
        'x-rapidapi-key': '2778d821e1mshd863dba774cb813p19b466jsn7d78af511b46'
      }
    };

    axios.request(config).then((response)=>
      {
        console.log(response.data.movies[1]);
        const results = response.data.movies;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      })
    },[])
  
  return (
    <div>
<div className="banner" style={{backgroundImage: `url(${movie ? movie.poster_path : ""})`}}>
  <div className="content">
            <h1 className="movie_name">{movie?movie.original_title:''}</h1>
            <div className="banner-button">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className="discription">
              {movie?movie.overview:""}
            </h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  )
}

export default Banner
