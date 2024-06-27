import {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {

    //로그인 상단바 없어서져서 필요없음 !! 
    const [isLogin, setLogin] = useState(false);    

    const handleLogClick = () => {  // 함수; 링크 클릭 시 호출되어 islogin 상태 토글 
        setLogin(!isLogin);
    };

    // link 눌렀을 때 스타일 변화 
    // const LogLink = styled(Link)`
    //     color: ${isLogin ? 'white' : 'yellow'};  
    //     font-weight: ${isLogin ? '600' : '600'};
    //     text-decoration: none;
    //     display: inline-block;
    // `;
// 적용이 왜 이딴식으로 됨 ?? 'yellow' : 'whtie' 하면 로그아웃 시에만 yellow 뜸 
    

    return (
        <div className="nav-container">
            <div className="nav-wrap">
                <div className="nav-left-wrap">
                    <ul>
                        <li>
                            <Link className='header-left-item' to='/' >
                            <p className="ho" >UMC Movie</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/login' onClick={handleLogClick}>
                            <p className="ho" >{isLogin ? '로그아웃' : '로그인'}</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/sign'>
                                <p className='ho'>회원가입</p>
                            </Link>
                        </li>
                        
                        <li>
                            <Link className='header-nav-item' to='/popular'>
                                <p className="ho" >Popular</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='nowplay'>
                                <p className="ho">Now Playing</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='top'>
                            <p className="ho">Top Rated</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='upcoming'>
                                <p className="ho">Upcoming</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}