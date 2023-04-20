import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Router } from "react-router-dom";

function Trending() {
    const { id } = useParams()
    const [moviedata, setMovieData] = useState([]);
    const [categoryType, setCategoryType] = useState("");
    const [inputvalue, setInputValue] = useState("");
   

    const getData = async () => {
        const data = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US")
        setMovieData(data.data.results)
    }

 

    const searchHandler = (e, value) =>{
        e.preventDefault();
       const filtered = moviedata.filter((one) => (one.name || one.title).includes(value));
       setMovieData(filtered)
    }

    useEffect(() => {
        if(inputvalue === ""){
            getData()
        }
    }, [inputvalue])

    useEffect(() => {
        getData();
    }, [])




    return (
        <>
            <section className="main-section">
            <div className='container d-flex justify-content-between'>
         
                <form className="d-flex" role="search">
                      <input onChange={(e)=>{
                        setInputValue(e.target.value);
                        searchHandler(e, e.target.value);
                      }} value={inputvalue} className="form-control me-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search"  />
                    </form>
            </div>
                
                <div className="container">
                    <div className="row">
                        {moviedata &&
                            moviedata.map((item) => {
                                
                                return (
                                    <>
                                        <div className="col-lg-6" key={item.id}>
                                            <div
                                                className="main-section-text"
                                            
                                            > <Link to={`/${item.id}`}>
                                                    <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="image" /> </Link>
                                                <h2 className='mt-3'>{item.name || item.title}</h2>

                                            </div>
                                        </div>

                                    </>
                                );
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trending;