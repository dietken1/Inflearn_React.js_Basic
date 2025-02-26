// math 모듈
export function add(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}

export default function multiply(a,b) {
    return a * b;
}

// // common JS 모듈 시스템 방식
// module.exports = {
//     add,
//     sub,
// };


// // ES 모듈 방식
// export {add,sub};