// 부모 요소로부터 Props를 받을때, {}로 감싸는것 잊지 않기!
const Viewer = ({count}) => {
    return (
        <>
            <div>현재 카운트 :</div>
            <h1>{count}</h1>
        </>
    );
}

export default Viewer;