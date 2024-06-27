
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


// 무한 스크롤 구현 
// import { useEffect, useState, useRef } from 'react';
// import MovieCard from './MovieCard';
// import useAxiosMovies from './Api.jsx';
// import Loding from './Loding.jsx';

// const NowPlay = () => {
//     const [loading, setLoading] = useState(true); // 데이터 불러오는 중인지 여부 나타냄 
//     const [movies, setMovies] = useState([]); // 불러온 영화 목록을 저장하는 상태 
//     const [page, setPage] = useState(1); // 현재 데이터 페이지를 추적하는 상태 
//     const observer = useRef(); // Intersection Observer를 위한 useRef 사용

//     //영화 데이터 불러오는 함수 
//     const fetchMovies = (page) => {
//         useAxiosMovies('now_playing', page)
//             .then(newMovies => {
//                 //기존 영화 목록에 새로운 영화들을 추가 
//                 setMovies(prevMovies => [...prevMovies, ...newMovies]);
//                 setLoading(false); //데이터 로딩이 끝났음을 표시 
//             })
//             .catch(error => {
//                 console.error('영화 데이터 불러오는 중 에러 발생:', error);
//                 setLoading(false); // 데이터 로딩이 끝났음을 표시 
//             });
//     };

    // 페이지가 변경될 때마다 영화 데이터를 새로 불러옴 
//     useEffect(() => {
//         fetchMovies(page); //fetchMovies 함수를 호출하여 페이지에 맞는 영화 데이터를 가져옴
//     }, [page]); // page 상태가 변경될 때마다 useEffect가 실행됨 

//     //Intersection Observer를 초기화하고 관찰할 요소를 설정하는 useEffect
//     useEffect(() => {
//         const options = {
//             root: null, // 뷰포트 기준으로 관찰
//             rootMargin: '20px', // 뷰포트와의 여백 
//             threshold: 0.5, // 타겟 요소가 50%이상 보이면 콜백호출 
//         };

//         // observerCallback함수를 콜백으로 가지는 
//         observer.current = new IntersectionObserver(observerCallback, options);

//         //마지막 영화 카드가 있는 경우에만 적용
//         if (observer.current && page > 1 ) {
//             //마지막 영화 카드 요소를 관찰 대상으로 추가 
//             observer.current.observe(document.getElementById(`movie-${movies[movies.length - 1].id}`));

//         }

//         return () => {
//             if (observer.current) {
//                 observer.current.discount();
//             }
//         };
//     }, [movies, page]); // movies나 page 상태가 변경될 때마다 useEffect 실행 

//     const observerCallback = (entries => {
//         if (entries[0].isIntersecting) {
//             setLoading(true); 
//             setPage(prevPage => prevPage + 1); // 다음 페이지로 이동 
//         }
//     });

//     return (
//         <div className='movie-container'>
//             {loading ? <Loding/> : movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
//         </div>
//     );
    
// }

// export default NowPlay;