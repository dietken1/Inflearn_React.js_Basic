import './App.css'
import Bulb from './components/Bulb.jsx'
import Counter from './components/Counter.jsx'

// 컴포넌트 이름은 대문자로 시작해야함
function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;