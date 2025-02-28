import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

// 컴포넌트 이름은 대문자로 시작해야함
function App() {

  // Spread연산자를 활용한 props전달
  const buttonProps = {
    text : '메일',
    color : 'red',
    a : 1,
    b : 2,
    c : 3,
  };

  return (
    <>
     <Button {...buttonProps} />
     <Button text={'카페'} />
     <Button text={'블로그'} >
      {/* children 키워드를 활용한 props전달 */}
      <Header />
      </Button>
    </>
  );
}

export default App
