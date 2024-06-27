
import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

// const InfoContainer = styled.div`
//   background-image: url(${props => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`});
//   background-position: center;
//   background-repaet: no-repeat;
//   background-size: cover;
//   background-blur:20px;
//   z-index: 111;
//   display: felx;
//   flex-direction: column;
// `;
//이거 왜 안 뜨지 배경에 영화 포스터 희미하게 뜨도록 ..
const InfoContainer = styled.div`
  // position: relative;
  // padding: 20px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0)),
              url(${props => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`})center/cover no-repeat;
 
`;

const Content = styled.div`
  display: flex;
  // align-items: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  // position: relative;
  // z-index: 1;
  text-align: left;
  margin-left: 20px;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 20px 0 10px;
  color: white;
  display: flex;
  margin-left: 20px;
`
const Rating =styled.div`
  font-size: 25px;
  margin: 10px 0;
  color: white;
  // display: grid;
`;

const ReleaseDate = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const Overview = styled.div`
displ
  font-size: 20px;
  margin: 10px 0;
  max-width: 600px;
`;

export default function MovieDetail() {

  const { title } = useParams();
  const { state:movie } = useLocation(); // state 사용하는 코드가 없음. movie 반환 

  const stars = "⭐️".repeat(Math.floor(movie.vote_average));
  //grid-template-columns: repeat(8, 1fr);
 // const stars = Array(Math.floor(movie.vote_average)).fill('⭐️');
  

//   return (
//     <InfoContainer movie={movie} >
//     <div className='info-container' >
//       <div>   
//         <img 
//         style={{width: "300px", height: "450px"}}
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//         alt='영화 포스터 이미지' />
//         <Title>{title}</Title>
        
//         <Rating style={{fontSize: "25px"}}>{stars}</Rating>

//         <Title style={{fontSize: "20px"}}>개봉일 {movie.release_date}</Title>
//         <Title style={{fontSize: "20px"}}>{movie.overview ? movie.overview: 'TMDB에서 제공하는 상세 줄거리 정보가 없습니다.'}</Title>
//       </div>
//     </div>
//     </InfoContainer>
//   );
// };
  return (
    <InfoContainer movie={movie}>
      <Content>
        <Poster 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt='영화 포스터 이미지' 
        />
        <TextContent>
          <Title>{title}</Title>
          <Rating>{stars}</Rating>
          <ReleaseDate>개봉일 {movie.release_date}</ReleaseDate>
          <Overview>
            {movie.overview ? movie.overview : 'TMDB에서 제공하는 상세 줄거리 정보가 없습니다.'}
          </Overview>
        </TextContent>
      </Content>
    </InfoContainer>
  );
}

// export default function MovieDetail() {

//   const { title } = useParams();
//   const { state:movie } = useLocation(); // state 사용하는 코드가 없음. movie 반환 

//   const stars = "⭐️".repeat(Math.floor(movie.vote_average));
//   //grid-template-columns: repeat(8, 1fr);
//  // const stars = Array(Math.floor(movie.vote_average)).fill('⭐️');
  

//   return (
//     <InfoContainer movie={movie} >
//     <div className='info-container' >
//       <div>   
//         <img 
//         style={{width: "300px", height: "450px"}}
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//         alt='영화 포스터 이미지' />
//         <Title>{title}</Title>
        
//         <Rating style={{fontSize: "25px"}}>{stars}</Rating>

//         <Title style={{fontSize: "20px"}}>개봉일 {movie.release_date}</Title>
//         <Title style={{fontSize: "20px"}}>{movie.overview ? movie.overview: 'TMDB에서 제공하는 상세 줄거리 정보가 없습니다.'}</Title>
//       </div>
//     </div>
//     </InfoContainer>
//   );
// };

//삼항 연산자 사용 해주세요 ... 
// function getFee(isMember) {
//   return isMember ? '$2.00' : '$10.00';
// }

// console.log(getFee(true));
// // Expected output: "$2.00"

// console.log(getFee(false));
// // Expected output: "$10.00"

// console.log(getFee(null));
// // Expected output: "$10.00"