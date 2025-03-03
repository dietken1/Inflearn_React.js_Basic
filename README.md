# React.js_Basic
인프런 이정환님의 [한 입 크기로 잘라 먹는 React] 강의를 수강하며 진행한 프로젝트입니다.

### 1. useState
```jsx
const = [state, setState] = useState('');
```
**state** : 상태 (=변수)<br>
**setState** : 상태를 변화시키는 메서드<br>
**state가 변경될 때마다 리렌더링이 발생함**
<br><br>

### 2. useRef
```jsx
const numRef = useRef('');
```
**Ref는 변경되도 리렌더링이 발생하지 않음**
<br><br>

### 3. useEffect
```jsx
useEffect(() => {console.log('콜백함수 실행됨')}, [a, b])
```
**두 번째 매개변수인 배열의 요소들 중 하나라도 값이 변하면 콜백함수를 실행**<br>
***(변경이 되지 않아도 처음에 일단 한번은 실행됨)***
<br><br>

### 4. useReducer
**useState와 기능이 유사하지만, 컴포넌트 외부로 상태관리 코드를 분리할 수 있다는 장점이 있음**
```jsx
// 컴포넌트 외부의 reducer함수
function reducer(state, action) {
    if(actiom.type === 'INCREASE') {
        return (state + action.data);
    }
}

// Exam컴포넌트
const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0); // (reducer함수, 초기값)
    const onClickExam = () => {
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
<br>

## **최적화**

### 5. useMemo
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

### 6. memo
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

### 7. useCallback
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
<br>

## **Context**
**프롭스 드릴링을 해결하기 위한 기술로, 단계별로 Props를 전달해 내려갈 필요가 없이 Context에서 가져다 쓸 수 있게 해줌**

### 8. createContext
**부모 컴포넌트에서 Context를 선언할때 사용**
```jsx
const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
}, []);

export const TodoStateContext = createContext();    // State용 Context
export const TodoDispatchContext = createContext(); // 함수용 Context
                                
                                ```
                                ```
                                ```
return (
    <div className='App'>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Daughter />
          <Son />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
```

### 9. useContext
**자식 컴포넌트에서 상위 Context를 참조하기 위해서 사용**
```jsx
const todos = useContext(TodoStateContext);
const {onUpdate, onDelete} = useContext(TodoDispatchContext);
```
<br>

## **동적 경로**
### 10. useParams (URL Parameter)
```url
http://localhost:5173/new/1
http://localhost:5173/new/2
http://localhost:5173/new/3
```
```jsx
const params = useParams();
console.log(params);
return <div>{params.id}번 일기입니다</div>;
```

### 11. useSearchParams (Query String)
```url
http:/localhost:5173/?value=hello
http:/localhost:5173/?value=bye
http:/localhost:5173/?value=good
```
```jsx
const [params, setParams] = useSearchParams();
console.log(params.get('value'));
```

### 12. useNavigate
**버튼 클릭같은 특정 이벤트가 발생했을 때 페이지를 이동시키는 리액트 훅**
```jsx
const nav = useNavigate();
const onClickButton = (() => {
  nav('/new');
});
```

## React의 작동 방식
### **React는 MPA방식이 아닌 SPA방식으로 동작함**
- ### MPA : 서버가 여러개의 페이지를 가지고 있어서 페이지 이동 시 모든 요소 교체 -> 페이지 이동이 매끄럽지 않음
- ### SPA : 서버가 하나의 페이지만 가지고 있어서 페이지 이동 시 필요한 요소만 교체 -> 쾌적한 페이지 이동