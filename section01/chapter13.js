// 1. 콜백함수
function main(value) {
    console.log('3');
    console.log('2');
    console.log('1');
    value();
}

main(() => {
    console.log('i am sub!');
});

// 2. 콜백함수의 활용
function repeat(count){
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count){
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

// repeat(5);
// repeatDouble(5);

// repeat함수와 repeatDouble은 아주 미세한 차이임
// -> 콜백함수 활용하여 간단하게 단축

function realRepeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

realRepeat(5, (idx) => {
    console.log(idx);
});
realRepeat(5, (idx) => {
    console.log(idx*2);
});
realRepeat(5, (idx) => {
    console.log(idx*3);
});