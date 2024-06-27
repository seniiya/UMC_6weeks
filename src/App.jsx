
// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpComing from './components/UpComing';
import TopRated from './components/TopRatedPage';
import Popular from './components/PopularPage';
import MainPage from './components/MainPage';
import NowPlay from './components/NowPlayingPage';
import Navbar from './components/Navbar';
// import MovieDetail from './components/MovieDetailPage';
import MovieDetail from './components/mdptest';
import NotFound from './components/NotFound';
import Sign from './components/Sign';
import Login from './components/Login';


function App() {
  return (

    <div className="root-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplay" element={<NowPlay />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/sign" element={<Sign />}/>
          <Route path="/login" element={<Login/>}/>

          <Route path='/movie/:id' element={<MovieDetail />}/>  
          
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>

  
    </div>
   
    
  );

  
}

export default App;