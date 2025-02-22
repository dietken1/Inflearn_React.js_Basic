for (let idx = 0; idx < 10; idx++) {
    if (idx % 2 === 0) {
        continue;
    }
    if (idx > 5) {
        break;
    }
    console.log(idx);
}

