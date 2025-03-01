# React.js_Basic
인프런 이정환님의 [한 입 크기로 잘라 먹는 React] 강의를 수강하며 진행한 프로젝트입니다.

## 1. useState
```const = [state, setState] = useState('');```<br>
**state** : 상태 (=변수)<br>
**setState** : 상태를 변화시키는 메서드<br>
**state가 변경될 때마다 리렌더링이 발생함**

## 2. useRef
```const numRef = useRef('');```<br>
**Ref는 변경되도 리렌더링이 발생하지 않음**

## 3. useEffect
```useEffect(() => {}, [a, b])```<br>
**두 번째 매개변수인 배열의 값이 하나라도 변하면 콜백함수를 실행**<br>
***(변경이 되지 않아도 일단 한번은 실행됨)***

## useReducer
**useState와 기능이 유사하지만, 컴포넌트 외부로 상태관리 코드를 분리할 수 있다는 장점이 있음**