function MovieCard({movie}){ //movie is an object that has its own attributes like title, year, image
    //this function just creates the overall structure of the movie card the css file will also help for this 
    function handleClicked(){
        alert("you clicked it"); 
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.Title} />
        </div>
        <div className="movie-overlay">
            <button className="favourite" onClick={handleClicked}>❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Released}</p>
        </div>
    </div>
}

export default MovieCard; //when we want to use this component in another file we can import it