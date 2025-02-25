// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
    { name : '정원준', hobby : '개발'},
    { name : '정투준', hobby : '게임' },
    { name : '정쓰리준', hobby : '공부'},
];

const developers = arr1.filter(
    (item) => item.hobby === '개발'
);

console.log(developers);

// 2. map
// 배열의 모든 요소를 순회하면서 콜백함수를 실행
// -> 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3,];
let mapResult = arr2.map((item,idx,arr) => {
    console.log(idx, item);
    return item*2;
});
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. Sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);

let arr4 = [10,3,5];
arr4.sort((a,b) => {
    if (a > b){
        return 1;   // -> b,a 배치
    } else if (a < b) {
        return -1;  // -> a,b 배치
    } else {
        return 0;
    }
})
console.log(arr4);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['c', 'a', 'b'];
const sortedArr = arr5.toSorted();

console.log(arr5);
console.log(sortedArr);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi','my', 'name', 'is', 'jwj'];
let joinedArr = arr6.join(' ');
console.log(joinedArr);