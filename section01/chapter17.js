// 1. 배열 생성
let arrA = new Array();  // 배열 생성자
let arrB = [];  // 배열 리터럴 (주로 사용)

let arrC = [
    1,
    2,
    3,
    true,
    'hello',
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[5];
console.log(item1,item2);

console.log(arrC[3]);
arrC[3] = false;
console.log(arrC[3]);