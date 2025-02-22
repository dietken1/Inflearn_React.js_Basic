function funcA() {
    console.log('funcA');
}

let varA = funcA;
varA();

let varB = function () {
    console.log('익명함수 호출');
};

varB();

// 2. 화살표 함수
let varC1 = () => {
    return 1;
};
let varC2 = () => 1;
let varC3 = (value) => value + 1;
let varC4 = (value) => {
    console.log('varC4함수 호출됨');
    return value + 1;
};

console.log(varC1());
console.log(varC2());
console.log(varC3(3));
console.log(varC4(5));