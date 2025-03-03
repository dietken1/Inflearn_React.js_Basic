import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import { useContext } from 'react'
import { useMemo } from 'react'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item)=>
        String(item.id)===String(action.data.id)
          ? action.data
          : item
      );
    case 'DELETE':
      return state.filter((item)=>
        String(item.id)!==String(action.data.id)
      );
  }
}

// 임시데이터
const mockDate = [
  {
    id: 1,
    createdDate: new Date('2025-03-03').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date('2025-03-02').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2025-02-16').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
]

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockDate);
  const idRef = useRef(3);

  // 새로운 일기를 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id : idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id,
      }
    });
  };

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
  }, []);

  return (
    <>
      {/* 1. Routes컴포넌트 안에는 Route컴포넌트만 사용 가능 */}
      {/* 2. Routes컴포넌트 외부의 요소는 모든 페이지에 공통적으로 렌더링됨 */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext value={memoizedDispatch}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;