import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    // 1. Routes컴포넌트 안에는 Route컴포넌트만 사용 가능
    // 2. Routes컴포넌트 외부의 요소는 모든 페이지에 공통적으로 렌더링됨
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default App;