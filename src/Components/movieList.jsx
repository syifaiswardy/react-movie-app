import React, { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import Home from "./home";


const MovieList = () => {

    const { movieList, loading, searched } = useContext(GlobalContext)

    console.log(movieList, searched);

    const renderMovies = () => {
        if (loading) {
            return <span className="d-flex justify-content-center align-items-center mt-5">Loading...</span>;
        } else if (movieList && movieList.length > 0) {
            return (
                <div className="row">
                    {movieList.map((item) => (
                        <div className="col-md-3 mb-4" key={item.imdbID}>
                            <div className="card h-100" style={{ background: 'black' }}>
                                <img className="card-img-top" src={item.Poster} alt="Movie Poster" />
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{ color: 'rgb(255, 253, 147)' }}>{item.Title}</h5>
                                    <p className="card-text text-center" style={{ color: 'rgb(255, 253, 147)' }}>{item.Year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div>
                    <p className="d-flex justify-content-center align-items-center mt-5">Movie not found</p>
                </div>
            );
        }
    };
    return (
        <div className="container">
            <div className="movieList">
                {!searched ? (
                    <div>
                        <Home />
                    </div>
                ) : (
                    renderMovies()
                )}
            </div>
        </div>

    )

}

export default MovieList;