// 부모 요소로부터 Props를 받을때, {}로 감싸는것 잊지 않기!
const Controller = ({onClickButton}) => {
    return (
        <div>
            <button onClick={() => {
                onClickButton(-1);
            }}>-1</button>
            <button onClick={() => {
                onClickButton(-10);
            }}>-10</button>
            <button onClick={() => {
                onClickButton(-100);
            }}>-100</button>
            <button onClick={() => {
                onClickButton(100);
            }}>+100</button>
            <button onClick={() => {
                onClickButton(10);
            }}>+10</button>
            <button onClick={() => {
                onClickButton(1);
            }}>+1</button>
        </div>
    );
}

export default Controller;