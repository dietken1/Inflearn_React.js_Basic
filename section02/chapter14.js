// async
// 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환하는 키워드
async function getData1() {
    return {
        name : '정원준',
        id : 'dietken1',
    };
}

// 애초에 비동기인 함수에서는 아무변화가 없음
async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : '정원준',
                id : 'dietken1',
            });
        }, 3000);
    });
}

console.log(getData1());
console.log(getData2());


// await
// aysnc 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
    const data = await getData2();
    console.log(data);
}

printData();