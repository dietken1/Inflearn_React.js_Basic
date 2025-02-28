import {useState} from 'react';

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

    const onChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name] : e.target.value // []를 사용하면 key로 사용가능
        });
    };

    return (
        <>
            <div>
                <input
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
        </>
    );
}

export default Register;