// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
console.log(`num1 : ${num1}`);
console.log(`num2 : ${num2}`);
console.log(`num3 : ${num3}`);
console.log(`num4 : ${num4}`);
console.log(`num5 : ${num5}`);

let num6 = 1 + 2 * 10;
console.log(`num6 : ${num6}`);


// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
console.log(`num7 : ${num7}`);
num7 -= 20;
console.log(`num7 : ${num7}`);
num7 *= 20;
console.log(`num7 : ${num7}`);
num7 /= 20;
console.log(`num7 : ${num7}`);
num7 %= 10;
console.log(`num7 : ${num7}`);


// 4. 증감 연산자
let num8 = 10;
console.log(num8++);
console.log(++num8);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or);
console.log(and);
console.log(not);

// 6. 비교 연산자
let comp1 = 1 === '1';
let comp2 = 1 !== 2;
let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);
console.log(comp5);
console.log(comp6);