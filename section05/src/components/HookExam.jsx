// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문 내에서 호출될 수 없음
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있음 (함수명 앞에 'use'를 붙이면 끝)
import useInput from './../hooks/useInput.jsx'

const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
};

export default HookExam;