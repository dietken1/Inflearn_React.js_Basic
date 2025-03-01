import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'

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

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){
        return {
          ...todo,
          isDone : !todo.isDone,
        };
      }
      return todo;
    }));
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새 배열
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  };

  return (
    <div className='App'>
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
}

export default App