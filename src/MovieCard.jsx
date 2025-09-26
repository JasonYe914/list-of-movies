import React from 'react';
import './MovieCard.css';

function MovieCard({movie}){
    function handleFavoriteClick(){
        console.log(`Favorite clicked for movie: ${movie.title}`);
    }


    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='movie-overlay'>
                    <button className="favorite-btn" onClick={handleFavoriteClick}>❤</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_Date}</p>
            </div>
        </div>
    )
}

export default MovieCard;