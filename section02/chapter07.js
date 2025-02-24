// 6가지의 요소 조작 메서드

// 1. Push
// 배열의 맨 뒤에 새로운 요소를 추가하는 기능
// 추가로, 새로운 배열의 길이를 반환함
let arr1 = [1, 2, 3,];
let newLength = arr1.push(4, 5, 6, 7);
console.log(`newLength : ${newLength}`);
console.log(arr1);

// 2. Pop
// 배열의 맨 뒤의 요소를 제거하여 반환
let arr2 = [1, 2, 3,];
console.log(arr2.pop());
console.log(arr2.pop());
console.log(arr2.pop());

// 3. Shift (*주의* : Pop보다 느림)
// 배열의 맨 앞 요소를 제거하여 반환
let arr3 = [1, 2, 3,];
const shiftedItem = arr3.shift();
console.log(`shiftedItem : ${shiftedItem}`);

// 4. Unshift (*주의* : Push보다 느림)
// 배열의 맨 앞에 새로운 요소를 추가하는 기능
// 추가로, 새로운 배열의 길이를 반환함
let arr4 = [1,2,3,];
const newLength2 = arr4.unshift(-2,-1,0);
console.log(`newLength2 : ${newLength2}`);
console.log(`arr4 : ${arr4}`);

// 5. Slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr5 = [1,2,3,4,5,];
let sliced1 = arr5.slice(2,5);    // *주의* : 시작인덱스, 끝인덱스+1 을 넣어줘야함
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);

// 6. Concat
// 두개의 서로 다른 배열을 이어붙이고, 새로운 배열을 반환
let arr6 = [1,2,3];
let arr7 = [3,4,5];
let concated = arr6.concat(arr7);
console.log(`concated : ${concated}`);