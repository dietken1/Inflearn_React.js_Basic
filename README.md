# React.js_Basic
인프런 이정환님의 [한 입 크기로 잘라 먹는 React] 강의를 수강하며 진행한 프로젝트입니다.

## 1. useState
```jsx
const = [state, setState] = useState('');
```
**state** : 상태 (=변수)<br>
**setState** : 상태를 변화시키는 메서드<br>
**state가 변경될 때마다 리렌더링이 발생함**
<br><br>

## 2. useRef
```jsx
const numRef = useRef('');
```
**Ref는 변경되도 리렌더링이 발생하지 않음**
<br><br>

## 3. useEffect
```jsx
useEffect(() => {console.log('콜백함수 실행됨')}, [a, b])
```
**두 번째 매개변수인 배열의 요소들 중 하나라도 값이 변하면 콜백함수를 실행**<br>
***(변경이 되지 않아도 처음에 일단 한번은 실행됨)***
<br><br>

## 4. useReducer
**useState와 기능이 유사하지만, 컴포넌트 외부로 상태관리 코드를 분리할 수 있다는 장점이 있음**
```jsx
// 컴포넌트 외부의 reducer함수
function reducer(state, action) {
    if(actiom.type === 'INCREASE') {
        return (state + action.data);
    }

// Exam컴포넌트
const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0); // (reducer함수, 초기값)
    const onClickExan = () => {
        dispatch({  // dispatch함수는 인수로 액션 객체를 가짐
            type : 'INCREASE',
            data : 1
        });
    }
    ```
    ```
    ```
}
```
## **최적화**

## 5. useMemo
**메모이제이션 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅**<br>
```jsx
const { totalCount, doneCount, notDoneCount } =
    useMemo(()=>{
            const totalCount = todos.length;
            const doneCount = todos.filter((todo)=>todo.isDone).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            };
    }, [todos]);
```

## 6. memo
**Props중, 함수(객체타입, 즉 주소로 저장됨)는 같은 함수를 전달하더라도 주소가 달라져서 리렌더링이 발생**<br>
**-> 이를 해결하기 위한 기능**
```jsx
export default memo(TodoItem, (prevProps, nextProps)=>{
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});
```

## 7. useCallback
**함수가 리렌더링과 상관없이 딱 한번만 생성되게(혹은 특정 조건에 따라)하는 리액트 훅**
**memo대신에 사용 가능함**
```jsx
const onUpdate = useCallback((targetId) => {
    dispatch({
      type : 'UPDATE',
      data : targetId,
    });
  }, []);
```

### 최적화 코드는 마구잡이로 사용하면 오히려 효율이 나빠질수도 있으니 주의!