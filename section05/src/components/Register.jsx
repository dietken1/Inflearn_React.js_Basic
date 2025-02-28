import {useState, useRef} from 'react';

// 회원관리 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name : '',
        birth : '',
        country : '',
        bio : '',
    });

    const countRef = useRef(0);   // useRef는 리렌더링 되지 않음
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value // []를 사용하면 key로 사용가능
        });
    };

    const onSubmit = () => {
        if(input.name === '') {
            // 이름을 입력하는 DOM요소에 포커스
            inputRef.current.focus();
        }
    };

    return (
        <>
            <div>
                <input
                    ref={inputRef}
                    name='name'
                    value={input.name}
                    onChange={onChange}
                    placeholder="이름"
                />
            </div>

            <div>
                <input 
                    name='birth'
                    value={input.birth}
                    onChange={onChange}
                    type="date" 
                />
            </div>

            <div>
                <select name='country' value={input.country} onChange={onChange}>
                    <option value=''></option>
                    <option value='KR'>한국</option>
                    <option value='US'>미국</option>
                    <option value='UK'>영국</option>
                </select>
            </div>

            <div>
                <textarea name='bio' value={input.bio} onChange={onChange}></textarea>
            </div>

            <button onClick={onSubmit}>제출</button>
        </>
    );
}

export default Register;