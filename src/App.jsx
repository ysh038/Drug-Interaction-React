import style from './App.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [result, setResult] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/test')
    .then((response)=>{
      console.log(response);
      setResult(response.data);
    }).catch((e)=>{
      console.error(e);
    }).finally(()=>{
      console.log("axios 테스트 통신 종료.");
    })
  },[])
  return (
    <>
      <Navbar/>
      <div>
        <div className={style.svg_container}>
          {/* svg width,height는 viewport의 크기, Box는 도형 비율 */}
          <svg width={100} height={100} viewBox='0 0 200 200'>
            <ellipse 
              cx="100" cy="100" rx="50" ry="100"
              fill="#dd3742" stroke="#b13138" stroke-width="1 " />
          </svg>
          <svg width={200} height={100}viewBox='0 0 200 150' >
            <text 
              x="30" y="90" 
              fill="#ED6E46" font-size="30" font-family="'Leckerli One', cursive">
              SVG Test
            </text>
          </svg>
          <svg width="300" height="300">
            <image 
              xlinkHref="https://source.unsplash.com/random/300×300"
              x="0"
              y="0"
              width="300"
              height="300"
              aria-label="동양의 고성 기와 지붕" />
          </svg>
        </div>
        <p className={style.css_test}>테스트 화면입니다.</p>
        <p className={style.css_test}>{result ? "서버와 연결 성공!!" : "서버 연결 실패"}</p>
      </div>
    </>
  );
}

export default App;
