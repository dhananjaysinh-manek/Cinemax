import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function SingleMovie() {
    const {id} = useParams()
    console.log(id, "id");
    const [singleMovie, setSingleMovie] = useState({})

    const getData = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d23733c91a9106574b9918ff7136e96c`)
        console.log(data.data, "123");
        setSingleMovie(data.data)
      }
     useEffect(()=>{
      getData();
     },[])
  return (
    <div class="container ">
    
    <div className='row'>
    <Link to="/" className='back'>Back<i class="bi bi-back"></i></Link>

    {
        Object.keys(singleMovie).length > 0 && (
            <div className="col-lg-12 text-center" key={singleMovie.id}>
                        <div
                          className="main-section-text"
                          onClick={(e) => this.handleOnClick(e, singleMovie.id)}
                        > 
                            <img src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path || singleMovie.poster_path}`} alt="image" />
                          <h2>Name : {singleMovie.name || singleMovie.title}</h2>
                          <p>Overview : <b>{singleMovie.overview}</b></p>
                          <p>Original_Language : <b>{singleMovie.original_language}</b></p>
                          <p>Popularity : <b>{singleMovie.popularity}</b></p>
                          <p>Vote_Average : <b>{singleMovie.vote_average}</b></p>
                          <p>Vote_Count : <b>{singleMovie.vote_count}</b></p>
                        </div>
            </div>
        )
    }
        
    </div>
    </div>
  )
}

export default SingleMovie