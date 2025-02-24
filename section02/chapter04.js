// 1. Spread 연산자 (...)
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4,...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

funcA = (a1,a2,a3,a4) => {
    console.log(a1,a2,a3,a4);
};

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
funcB = (one, two, ...rest) => {
    console.log(rest);
};

funcB(...arr1);