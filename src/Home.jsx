import {useState, useEffect} from "react";  
import MovieCard from "./MovieCard.jsx";
import './api';
import { fetchMovies } from "./api";

function Home() {
    const [moviesList, setMoviesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            try{
                const res = await fetchMovies();
                setMoviesList(res);
            }catch(error){
                console.error("Error fetching movies:", error);
            }
        };
        getMovies();
    }, []);

    return(
        <div className="movie-list">
             {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))};
        </div>
    )
}

export default Home;