//import './App.css'; 
import MovieCard from './MovieCard.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const res = await fetch('movie.json'); //fetches that json file data 
        const data = await res.json();  //parses the json file into a javascript object
        setMovies(data);
      }catch(err){
        console.error("Failed to fetch movies:", err);//error handling
      }
    };
    fetchMovies();
  }, []);

  //now we just need to map through it 
  return (
    <div>
      {movies.map(m => (
      <MovieCard 
        key={m.Title} //unique idenfitier for each movie card
        movie={m} //passing the whole movie object as a prop to MovieCard component
       />  
    )
  )}
 </div>
  );
}

