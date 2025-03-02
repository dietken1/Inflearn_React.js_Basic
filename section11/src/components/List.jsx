import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // 기존 데이터 계산  및 반환 함수
    // const getAnalyzedData = () => {
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=>todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     };
    // };
    // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

    // useMemo를 적용시킨 데이터 계산  및 반환 함수
    // -> 컴포넌트가 리렌더링 되더라도 todos가 안바뀌면 작동 X
    const { totalCount, doneCount, notDoneCount } = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos]);

    return (
        <div className="List">
            <h4>Todo List👀</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className='todos_wrapper'>
            {filteredTodos.map((todo) => { // 리액트에서 리스트로 나타내는 방법
                return <TodoItem key={todo.id} {...todo} />;
            })}
            </div>
        </div>
    );
}

export default List;