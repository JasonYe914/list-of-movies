import {useState, useEffect} from "react";  
import MovieCard from "./MovieCard.jsx";
import './api';
import { fetchMovies } from "./api";
import './Home.css';

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

    const searchMovieDetails = async (searchTerm) => {
        try{
            const res = await fetchMovies(searchTerm);
            setMoviesList(res);
        }catch(error){
            console.error("Error searching movies:", error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovieDetails(searchTerm);
        setSearchTerm("");
    };

    return(
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        <div className="movies-grid">
             {moviesList.map((movie) => (
                movie.title.toLowerCase().startsWith(searchTerm) &&
                <MovieCard key={movie.id} movie={movie}/>
            ))};
        </div>
    </div>
    )
}

export default Home;