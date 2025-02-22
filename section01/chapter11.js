// 함수선언
function greeting () {
    console.log('Hello!');
}

console.log('호출 전');
greeting();
console.log('호출 후');

// 호이스팅 (함수를 상단에 선언하지 않아도 호출 가능)
console.log(getArea(4,5));

function getArea(width, height) {
    function another() {
        console.log('중첩함수 호출됨');
    }
    another();
    return (width * height);
    console.log('실행될 수 없는 코드');
}

console.log(getArea(10,20));