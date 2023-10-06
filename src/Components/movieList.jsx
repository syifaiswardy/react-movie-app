import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


const MovieList = () => {

    const { movieList, loading } = useContext(GlobalContext)
    console.log(movieList);
    return (
        <div className="container">
            <div className="movieList">
                {loading ? (
                    <span className="d-flex justify-content-center align-items-center">Loading...</span>
                ) : movieList && movieList.length > 0 ? (
                    <div className="row">
                        {movieList.map((item) => (
                            <div className="col-md-3 mb-4" key={item.imdbID}>
                                <div className="card h-100" style={{background: 'black'}}>
                                    <img className="card-img-top" src={item.Poster} alt="Movie Poster" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center" style={{color: 'rgb(255, 253, 147)'}}>{item.Title}</h5>
                                        <p className="card-text text-center" style={{color: 'rgb(255, 253, 147)'}}>{item.Year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p className="d-flex justify-content-center align-items-center">Movie not found</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default MovieList;