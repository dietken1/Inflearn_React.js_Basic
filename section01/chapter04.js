// 1. 변수
let age;
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = '1997.01.07';
// birth = '123'; (const는 한번 정하면 바꿀 수 없음)
console.log(`bitrh : ${birth}`);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 를 제외한 기호는 사용 불가능
let $_name1;

// 3-2. 숫자로 시작 불가능
let name2;

// 3-3. 예약어 사용 불가능

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;
console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : ${c}`);

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
console.log(`salesCount : ${salesCount}`);
console.log(`refundCount : ${refundCount}`);
console.log(`totalSalesCount : ${totalSalesCount}`);
