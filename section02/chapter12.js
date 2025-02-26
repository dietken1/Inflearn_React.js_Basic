add = (a,b,callback) => {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
};

add(3,4,(value) => {
    console.log(value);
});

// 3초동안 음식 제작
function orderFood(callback) {
    setTimeout(() => {
        const food = '치킨';
        callback(food);
    }, 3000);
}

// 2초동안 음식 식히기
function coolDownFood(food,callback) {
    setTimeout(() => {
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000);
}

function freeze(food,callback) {
    setTimeout(() => {
        callback(food);
    }, 1500);
}

orderFood((food) => {
    console.log(food);
    coolDownFood(food, (coolDownedFood) => {
        console.log(coolDownedFood);
        freeze(coolDownedFood, (freezedFood) => {
            console.log(`냉동된 ${freezedFood}`);
        })
    });
});
