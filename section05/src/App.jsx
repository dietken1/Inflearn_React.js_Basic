import './App.css'
import { useState } from 'react';

// 컴포넌트 이름은 대문자로 시작해야함
function App() {
  // 리액트에서는 State의 값이 변경되어야 리렌더링이 된다
  // -> 즉, 일반 변수의 값이 바뀐다고 그것이 바로 반영되는것은 아님!
  // -> 그래서 useState를 사용함!
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          light === 'OFF' ? setLight('ON') : setLight('OFF');
        }}>
          {light === 'OFF' ? '켜기' : '끄기'}
        </button>
      </div>

      <div>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1);}}>
          +
        </button>
      </div>
    </>
  );
}

export default App;