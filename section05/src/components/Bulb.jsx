import {useState} from 'react'

// 리액트에서는 State의 값이 변경되어야 리렌더링이 된다
// -> 즉, 일반 변수의 값이 바뀐다고 그것이 바로 반영되는것은 아님!
// -> 그래서 useState를 사용함!
function Bulb() {
    const [light, setLight] = useState('OFF');
    return (
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor:'orange' }}>ON</h1>
      ) : (
      <h1 style={{ backgroundColor:'gray' }}>OFF</h1>
      )}
      
      <button onClick={() => {
        light === 'OFF' ? setLight('ON') : setLight('OFF');
      }}>
        {light === 'OFF' ? '켜기' : '끄기'}
      </button>
    </div>
  );
};

export default Bulb;