import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Debounce from './Debounce';
import MovieCard from './MovieCard';


const MainPageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 배너 어케 만드뇨 
const WelcomeText = styled.div`
    width: 140%;
    background-color: black;
    color: white;
    padding: 100px;
    text-align: center;
    font-size: 2em;
    margin-top: -40px;
`;

const SearchContainer = styled.div`
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
    color: white;
`;

// findyourmovies!
const SearchIcon = styled.span`
    margin-right: 10px;
    
`;

const SearchInput = styled.input`
    padding: 15px;
    width: 300px;
    border-radius: 15px;
    
`;

const Loading = styled.div`
    color: white;
    margin: 20px;
`


// 영화들 뜨는 컨테이너 *******
// 제목과 별점 뜨는 부분의 공간 크기가 제각각임 
// 입력창과 컨테이너 사이의 공간이 없음 
const ShowMoviesContainer = styled.div`
    background-color: #292a38;
    width: 700px;
    height: 50%;
    overflow-y: scroll;
    scrollbar-color: yellow black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    padding: 20px;
    margin-top: 40px;     // 입력창과 컨테이너 사이의 공간 만들기
`;

const StyledMovieCard = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  margin: 10px;
  // ShowMoviesContainer에 적용하고 싶은 스타일 코드...
//   .movie-card {
    
//   }
`;
// .movie-card 에서 이미지 크기 수정해줘야함 



const MovieItem = styled.div`
    background-color: #373b69;
    width: 200px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;     // 이미지와 텍스트 수직으로 나열 
    justify-content: space-between;
`;
// padding: 20px; 이것 때문에 제대로 안 되었음 ! 

// 추가 

const MovieImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;     // 이미지를 컨테이너에 맞게 조절
`;


const MovieInfo = styled.div`
    padding: 10px;
    height: 45px; // 고정된 정보 영역 높이
    display: flex;
    flex-direction: column;
    justify-content: space-between; // 글자들 사이의 공간을 균등하게 분배    
`;

const MovieTitle = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
    flex: 1;    // 타이틀이 차지할 공간
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovieRating = styled.div`
    font-size: 12px;
    color: #ffcc00;
    flex: 1;    // 별점이 차지할 공간 
    display: flex;
    align-items: center;
    justify-content: center;
`;




export default function MainPage() {
    const [hide, setHide] = useState(true); // 요소 등장 .. 
    const [srchmovie, setsrchMovie] = useState([]); // 영화 데이터 저장 상태
    const [InTerm, setInTerm] = useState(''); // 검색어 저장 상태 
    const [isLoading, setIsLoading] = useState(false);
    
    const debouncedQuery = Debounce(InTerm, 1000); // 1s 디바운스 지연 시간 




    const searchMovie =() => {
        if (InTerm) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1efcaf84f10ffaf1588ba14cda33695d&language=ko-KR&page=1&query=${InTerm}
            `)
            .then((response) => {
                setsrchMovie(response.data.results);
            })
            .catch((error) => {
                //에러 발생시 콘솔에 에러 발생 띄우기 
                console.error('에러 발생',error);
            });
        } else {
            setsrchMovie([]);   //이전 결과 초기화 
        }
    }

    // useEffect 불러올 때마다 InTerm 상태 변경 감지 (입력창에 들어오는 글씨)
    // useEffect(searchMovie, [InTerm]);

    // debounce 로 받아오기 
    useEffect(() => {
        // api 요청 코드 and 받아온 값을 srchMovie에 저장 
        searchMovie();
    }, [debouncedQuery]);


    const handleQuery = (e) => {
        setInTerm(e.target.value);
        if (e.target.value !== "") {
            setHide(false);
            // searchMovie();  입력이 끝난 후에만 api 요청을 받도록 한다 
        }
        else {
            setHide(true);
        }
    };

    // 코드가 너무 길어져요오
    useEffect(() => {               
        if (srchmovie.length === 0) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      }, [srchmovie]);
    
 
    

//     return (
//         <MainPageContainer className="page-container">
            
//             <WelcomeText>환영합니다</WelcomeText>
//             <SearchContainer>
//                 <SearchIcon role="img" aria-label="camera">📽️</SearchIcon>
//                 Find your movies!
//             </SearchContainer>
               

//             {/* input 태그에 onChange 이벤트가 발생할때마다 searchMovie(?)가 새로운 api 요청보냄 */}
//             <SearchInput type="text" placeholder="영화를 검색해 보세요 !"
//             onChange={(e) => handleQuery(e)} value={InTerm}/>
            
//             {/* <div className={hide ? "searchBoxH" : "searchBox"}></div> 이거 어케해야하노 ㅜㅜ  */}

//             {/* 검색 결과가 있을 때만 showmoviescontainer를 렌더링 함  */}
//             {!hide && srchmovie.length > 0 && (
//                 <ShowMoviesContainer > 

//                 {/* showmoviecontainer가 항상 렌더링 되고 있어서 다른 hide 들이 작동 못했음 !  */}
//                 {/* <div className={hide ? "searchBoxH" : "searchBox"}></div>   */}

//                     {srchmovie && srchmovie.map((movie) => {
//                             <MovieCard key={movie.id} movie={movie}/>
                        
//                         // 아 왜 이동 안 되는데 ???? 
                      
//                         return (
//                             <MovieItem key={movie.id}>
//                                 <MovieImg 
//                                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                                     alt='영화 포스터 이미지' 
//                                 />
//                                 <MovieInfo>
//                                     <MovieTitle>{movie.title}</MovieTitle>
//                                     <MovieRating>{movie.vote_average}</MovieRating>
//                                 </MovieInfo>
//                             </MovieItem>
                        
//                         );
                        
//                     })}
               
//                 </ShowMoviesContainer>
//             )}
             
//         </MainPageContainer>
//     );
// };

    return (
        <MainPageContainer className="page-container">

        <WelcomeText>환영합니다</WelcomeText>

        <SearchContainer>
            <SearchIcon role="img" aria-label="camera">📽️</SearchIcon>
            Find your movies!
        </SearchContainer>

        <SearchInput type="text" placeholder="영화를 검색해 보세요 !" 
        onChange={(e) => handleQuery(e)} value={InTerm} />

        {/* {!hide && srchmovie.length > 0 && (
            
            <ShowMoviesContainer>
            {srchmovie && srchmovie.map((movie) => (
                // <MovieCard key={movie.id} movie={movie} />
                <StyledMovieCard key={movie.id}>
                <MovieCard movie={movie} />
                </StyledMovieCard>
            ))}
            </ShowMoviesContainer>
        )}
        </MainPageContainer>
    );
} */}

        {!hide && (
            isLoading ? (   // 로딩 중 입니다 가 컨테이너 안 에 뜨려면 어째야하노 Loading을 컨테이너 안에 넣어줘야하나? 
                <Loading>로딩 중 입니다 ... </Loading>
            ) : (
                srchmovie.length > 0 ? (
                    <ShowMoviesContainer>
                        {srchmovie.map((movie) => (
                            <StyledMovieCard key={movie.id} >
                                <MovieCard movie={movie} /> 
                                {/* moviecard 내용이 겹친다면서 movie={movie}를 styledmoviecard 안에 넣어주면 영화 요소들이 아예 안 보임  */}
                            </StyledMovieCard>
                        ))}
                    </ShowMoviesContainer>
                ) : (
                    <div>검색 결과가 없습니다</div>
                )
            )
        )}
    </MainPageContainer>
  );
};

// 아 로딩도 안 뜨고 movie-card css 때문에 크기도 이상하게 나오고 
