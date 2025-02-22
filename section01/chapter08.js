// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;
let var7 = var1 ?? var1;
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);

let userName;
let userNickName = 'dietken1';

let displayName = userName ?? userNickName;
console.log(displayName);

// 2.typeof 연산자
var8 = 'hello';
let t1 = typeof var8;
console.log(t1)

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이 짝수 -> '짝', 홀수 -> '홀'
let res = var9 % 2 === 0 ? '짝수' : '홀수';
console.log(res);