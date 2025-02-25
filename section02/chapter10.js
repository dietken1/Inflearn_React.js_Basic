// 1. Date 객체를 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date('2002-03-14/9:15:12');
console.log(date2);

// 2. 타임 스탬프
// 특정 시간으로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date3 = new Date(ts1);
console.log(date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    second,
);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(5);  // javaScript에서는 0월부터 시작 (즉, 2는 3월을 의미)
date1.setDate(6);
date1.setHours(13);
date1.setMinutes(56);
date1.setSeconds(37);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());  // 날짜만
console.log(date1.toLocaleString());  // 지역에 맞춰서