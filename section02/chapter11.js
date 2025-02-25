// 비동기 처리
// JavaScript는 쓰레드가 1개임
// -> 하지만, 비동기 작업은 Web APIs에서 대신 수행됨
console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000)

console.log(3);