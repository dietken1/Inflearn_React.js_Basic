// 1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : '정원준',
    age : 24,
    hobby : '개발',
    extra : 'hello!',
};

let { name, age, hobby } = person;
console.log(name, age, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);