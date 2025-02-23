// 1. 단락 평가
returnTrue = () => {
    console.log('True 함수');
    return 10;
};

returnFalse = () => {
    console.log('False 함수');
    return undefined;
};

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());
// console.log(returnFalse() || returnTrue());


// 2. 단락 평가 활용 사례
printName = (person) => {
    const name = person && person.name;
    console.log(name || 'person의 값이 없음');
};

printName();
printName({ name : '정원준'});