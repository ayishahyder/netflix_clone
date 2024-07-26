import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios'; // Make sure to import axios directly

function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://movies-api14.p.rapidapi.com/shows',
      headers: { 
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com',
        'x-rapidapi-key': '2778d821e1mshd863dba774cb813p19b466jsn7d78af511b46'
      }
    };

    axios.request(config).then((response) => {
      console.log(response.data);
      setMovies(response.data.movies); // Adjust this if the actual data structure is different
    }).catch((error) => {
      console.error(error);

    });
  }, []);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
            <img key={obj.id} src={obj.backdrop_path} className={ props.isSmall?'smallposter':'poster'} alt="" />

          )
        }
      </div>
    </div>
  );
}

export default RowPost;
