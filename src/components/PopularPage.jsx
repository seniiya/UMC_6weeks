

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import useAxiosMovies from './Api.jsx';
import Loding from './Loding.jsx';
import Pagination from './Pagination.jsx';
import axios from 'axios';

// 원본 첫번째 꺼 
// const Popular = () => {
//     const [loading, setLoding] = useState(true);
//     const movies = useAxiosMovies('popular');



//     useEffect (() => {            // useEffect로 영화 목록 가져옴?
//         if (movies.length > 0) {
//             setLoding(false);   //로딩 완료 
//         } 
//     }, [movies]);

    
//     return (
//         <div className='movie-container'>
//             {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
//         </div>
//         // <MovieContainer>
//         //     {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
//         // <MovieContainer/>
        
//     );
    
// }

// export default Popular;


//페이지네이션 적용 
const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
    margin: 20px;
    margin-left: 50px;
    margin-right: 50px;
    background-color: #22264C;
    
`;


export default function Popular() {

    const [loading, setLoading] = useState(true);
    // const movies = useAxiosMovies('popular');

    const[currentPage, setCurrentPage] = useState(1);
    const[totalPages, setTotalPages] = useState(10); // 실제 총 페이지 수로 업데이트 필요
    const[movies, setMovies] = useState([]);


    const fetchMovies = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=1efcaf84f10ffaf1588ba14cda33695d&language=ko-KR`);
            setMovies(response.data.results);
            setTotalPages(response.data.total_pages);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    return (
        <>
            <MovieContainer>
                {loading ? <Loding/> : movies.map((movie) => <MovieCard key = {movie.id} movie={movie}/>)}
            </MovieContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={handlePageChange}
            />
            {/* <MovieContainer>
                {loading ? (
                    <Loding/>
                ) : (
                    currentMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                )}
            </MovieContainer> */}

        </>
        
    )
}

// 캐싱으로 페이지네이션 구현 

// import { useEffect, useState } from 'react';
// import MovieCard from './MovieCard';
// import styled from 'styled-components';
// import Loding from './Loding.jsx';
// import Pagination from './Pagination.jsx';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const MovieContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     // display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//     gap: 10px;
//     padding: 10px;
//     margin: 20px;
//     margin-left: 50px;
//     margin-right: 50px;
//     background-color: #22264C;
    
// `;

// const fetchMovies = async (page) => {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
//         params: {
//             api_key: '1efcaf84f10ffaf1588ba14cda33695d', // 본인의 API 키를 입력하세요
//             page: page,
//         },
//     });
//     return response.data;
// };

// export default function Popular() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const { data, isLoading, error } = useQuery({
//       queryKey: ['movies', currentPage],
//       queryFn: () => fetchMovies(currentPage),
//       keepPreviousData: true,
//     });
  
//     if (isLoading) return <Loding />;
//     if (error) return <div>오류가 발생했습니다.</div>;

//     const handlePageChange = (page) => {
//         if (page < 1) {
//             alert('localhost:3000내용: 가장 첫번째 페이지입니다.');
//             return;
//         }
//         setCurrentPage(page);
//     };

//     return (
//         <>
//             <MovieContainer>
//                 {data.results.map((movie) => (
//                     <MovieCard key={movie.id} movie={movie} />
//                 ))}
//             </MovieContainer>
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={10}
//                 onPageChange={handlePageChange}
//             />
//         </>
//     );
// }
// 다시 모든걸 수정해야하기에 .. 패스 