import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) => {
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

    return (
        <div className="List">
            <h4>Todo List👀</h4>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className='todos_wrapper'>
            {filteredTodos.map((todo) => { // 리액트에서 리스트로 나타내는 방법
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
            })}
            </div>
        </div>
    );
}

export default List;