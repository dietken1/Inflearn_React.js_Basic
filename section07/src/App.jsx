// 리액트에서 데이터의 흐름은 위에서 아래로만 가능!
import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });

  // 3. 언마운트 : 죽음


  // 두번째인수의 값이 바뀌면 콜백함수를 실행
  // 두번째 인수로 들어가는 이 배열을 '의존성 배열' 이라고 부름
  // (= dependency of array)
  // (= deps)

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App