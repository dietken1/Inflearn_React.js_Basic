import {useState} from 'react';

const Register = () => {
    const [name, setName] = useState('이름');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeBio = (e) => {
        setBio(e.target.value)
    }

    return (
        <>
            <div>
                <input 
                    value={name}
                    onChange={onChangeName}
                    placeholder="이름"
                />
            </div>

            <div>
                <input 
                    value={birth}
                    onChange={onChangeBirth}
                    type="date" 
                />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value=''></option>
                    <option value='KR'>한국</option>
                    <option value='US'>미국</option>
                    <option value='UK'>영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio}></textarea>
            </div>
        </>
    );
}

export default Register;