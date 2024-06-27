import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.jsx";



const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${movie.id}`, {
            state: movie
        })
    }
    return (
        <div className="movie-card" onClick={onClickMovieItem}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className='movie-info' key={movie.id}>
            <h2>{movie.title}</h2>
            <span>{movie.vote_average.toFixed(1)}</span>
        </div>
    </div>
    )

}


export default MovieCard;


// movie 대신에 props 쓰니까 안 불러지는 듯 ? 
// export default function MovieCard(props) {
//     const navigate = useNavigate();

//     const onClickMovieItem = () => {
//         navigate(`/movie/${props.title}`, {
//             state: props
//         })
//     }

//     return (
//         <div className="movie-card" onClick={onClickMovieItem}>
//         <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title} />
//         <div className='movie-info' key={props.id}>
//             <h2>{props.title}</h2>
//             <span>{props.vote_average}</span>
//         </div>
//     </div>        
//     )
// }


    // <div className="movie-card" onClick={onClickMovieItem}>
    //     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    //     <div className='movie-info' key={movie.id}>
    //         <h2>{movie.title}</h2>
    //         <span>{movie.vote_average}</span>
    //     </div>
    // </div> 

    // <div className="movie-card" onClick={onClickMovieItem}>
    //     <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title} />
    //     <div className='movie-info' key={props.id}>
    //         <h2>{props.title}</h2>
    //         <span>{props.vote_average}</span>
    //     </div>
    // </div> 



//이걸론 안 되나 ?? function
// export default function MovieCard({movie}) {

//     return (
//         <div className="movie-card" onClick={onClickMovieItem}>
//         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//         <div className='movie-info' key={movie.id}>
//             <h2>{movie.title}</h2>
//             <span>{movie.vote_average}</span>
        
//         </div>
//      </div>
//     );
// }