import './TodoItem.css'

const TodoItem = ({content, date, id, isDone, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className='TodoItem'>
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton} >삭제</button>
        </div>
    );
};

export default TodoItem;