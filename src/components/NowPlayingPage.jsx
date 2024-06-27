
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import useAxiosMovies from './Api.jsx';
import Loding from './Loding.jsx';

const NowPlay = () => {
    const [loading, setLoding] = useState(true);
    const movies = useAxiosMovies('now_playing');

    useEffect (() => {            
        if (movies.length > 0) {
            setLoding(false);   
        } 
    }, [movies]);

    return (
        <div className='movie-container'>
            {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
        </div>
    );
}

export default NowPlay;


