// 원시타입 : 메모리 변경 X
// 객체타입 : 메모리 변경 O (포인터 개념)

let o1 = {
    name : '정원준'
};
let o2 = o1;    // 얕은 복사
let o3 = { ...o1};  // 깊은 복사

// 얕은 비교
console.log(o1 === o2); // true
console.log(o1 === o3); // false

// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // false