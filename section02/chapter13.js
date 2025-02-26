// Promise : 비동기 작업을 감싸는 객체
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num+10);
            } else {
                reject(`${num}은(는) 숫자가 아닙니다.`)
            }
        }, 2000);
    });
    
    return promise;
}

// // then 메서드
// // -> 성공 이후에 동작하는 메서드
// promise.then((value) => {
//     console.log(value);
// });

// // catch 메서드
// // -> 실패 이후에 동작하는 메서드
// promise.catch((error) => {
//     console.log(error);
// });

// // then과 catch모두 동일한 promise를 반환하기에 이어서 사용가능
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const p = add10(15);
p.then((result) => {
    console.log(result);
    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
    return newP;
}).catch((error) => {
    console.log(error);
})