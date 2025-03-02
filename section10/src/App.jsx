import './App.css'
import { useState, useRef, useReducer, useCallback, createContext } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [  // 테스트용 임시 데이터
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : '개발하기',
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : '빨래하기',
    date : new Date().getTime(),
  }
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item)=>item.id===action.data ? {...item, isDone: !item.isDone} : item);
    case 'DELETE':
      return state.filter((item)=>item.id!==action.data);
  }
  return state;
}

const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 처음에 마운트되었을때만 생성됨. 즉, 아무리 리렌더링이 되어도 다시 생성X
  // useCallback을 사용한 최적화
  const onCreate = useCallback((content) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : 'UPDATE',
      data : targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : 'DELETE',
      data : targetId,
    });
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </TodoContext.Provider>
    </div>
  );
}

export default App