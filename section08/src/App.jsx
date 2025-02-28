import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [  // 테스트용 임시 데이터
  {
    id : 0,
    isDone : false,
    contents : 'React 공부하기',
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    contents : '개발하기',
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    contents : '빨래하기',
    date : new Date().getTime(),
  }
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  )
}

export default App