// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프

let a = 1;
function funcA() {
    let b = 2;
    console.log(a);
}

funcA();

if (true) {
    let c = 1;
}

for (let i = 0; i < 10; i++) {
    let d = 1;
}