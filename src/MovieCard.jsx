function MovieCard({movie}){
    function handleFavoriteClick(){
        console.log(`Favorite clicked for movie: ${movie.title}`);
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <button className="favorite" onClick={handleFavoriteClick}>❤</button>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.release_Date}</p>
            </div>
        </div>
    )
}

export default MovieCard;