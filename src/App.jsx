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
        <p className={style.css_test}>테스트 화면입니다.</p>
        <p className={style.css_test}>{result ? "서버와 연결 성공!!" : "서버 연결 실패"}</p>
      </div>
    </>
  );
}

export default App;
