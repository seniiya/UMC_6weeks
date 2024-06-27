
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosMovies = (path) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const axiosMovies = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${path}?api_key=1efcaf84f10ffaf1588ba14cda33695d&language=ko-KR&page=1`
            );
            setMovies(response.data.results);
        };

        axiosMovies();
    }, [path]);

    return movies;
}

export default useAxiosMovies;