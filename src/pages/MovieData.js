import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, Router } from "react-router-dom";

function MovieData() {
    const { id } = useParams()
    const [page, setPage] = useState(1)
    const [moviedata, setMovieData] = useState([]);
    const [categoryType, setCategoryType] = useState("");
    const [inputvalue, setInputValue] = useState("");
    const loadmore = () =>{
        setPage(page + 1)               
    }
    const paginationCall = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US&page=${page}`)
        setMovieData((prev) => [...prev, ...data.data.results]);
    }

    useEffect(() => {
        if(page !== 1){
            paginationCall();
        }
    }, [page])

    const getData = async () => {
        const data = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US")
        setMovieData(data.data.results)
    }

    const getFilter = async () => {
        const trending = "https://api.themoviedb.org/3/trending/all/week?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US"
        const toprated = "https://api.themoviedb.org/3/movie/top_rated?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US"
        const action = "https://api.themoviedb.org/3/discover/movie?api_key=cd35380314fc73fbc7a65cbf1054e460&language=en-US"

        const data = await axios.get(categoryType === "trending" ? trending : categoryType === "toprated" ? toprated : categoryType === "action" ? action : "");
        setMovieData(data.data.results);
    }

    const searchHandler = (e, value) => {
        e.preventDefault();
        const filtered = moviedata.filter((one) => (one.name || one.title).includes(value));
        setMovieData(filtered)
    }

    useEffect(() => {
        if (inputvalue === "") {
            getData()
        }
    }, [inputvalue])

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (categoryType !== "") {
            getFilter();
        }
    }, [categoryType])


    return (
        <>
            <section className="main-section">
                <div className='container d-flex justify-content-between'>
                    <div className='rated'>
                        <span className='opt' style={categoryType === "trending" ? { color: "red" } : {}} onClick={() => setCategoryType("trending")}>TRENDING</span>
                        <span className='opt' style={categoryType === "toprated" ? { color: "red" } : {}} onClick={() => setCategoryType("toprated")}>TOPRATED</span>
                        <span className='opt' style={categoryType === "action" ? { color: "red" } : {}} onClick={() => setCategoryType("action")}>ACTION</span>
                    </div>
                    <form className="d-flex" role="search">
                        <input onChange={(e) => {
                            setInputValue(e.target.value);
                            searchHandler(e, e.target.value);
                        }} value={inputvalue} className="form-control me-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>

                <div className="container">
                    <div className="row">
                        {moviedata.length > 0 &&
                            moviedata.map((item) => {

                                return (
                                    <>
                                        <div className="col-lg-4" key={item.id}>
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
                <button 
                className='btn btn-dark d-block w-100 mt-5 mb-5'
                onClick={() => loadmore()}
                >
                Load More
                </button>
            </section>
        </>
    )
}

export default MovieData