import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'

import {getEmotionImage} from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = (() => {
    nav('/new');
  });

  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />

      <Button text={'12344'} type={''} />
      <Button text={'12344'} type={'POSITIVE'} />
      <Button text={'12344'} type={'NEGATIVE'} />
      {/* 1. Routes컴포넌트 안에는 Route컴포넌트만 사용 가능 */}
      {/* 2. Routes컴포넌트 외부의 요소는 모든 페이지에 공통적으로 렌더링됨 */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;