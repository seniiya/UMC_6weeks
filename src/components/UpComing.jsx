import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import useAxiosMovies from './Api.jsx';
import Loding from './Loding.jsx';

const UpComing = () => {
    const [loading, setLoding] = useState(true);
    const movies = useAxiosMovies('upcoming');

    useEffect (() => {            // useEffect로 영화 목록 가져옴?
        if (movies.length > 0) {    // 다른 곳들에도 똑같이 적용 
            setLoding(false);
        } 
    }, [movies]);


    
    return (
        <div className='movie-container'>
            {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
        </div>
    );
    //로딩이 참이면 로딩 페이지로 
    //거짓이면 무비 목록 페이지로 -> 영화 목록 가져옴 
}

export default UpComing;