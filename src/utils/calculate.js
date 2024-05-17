const sum = (...args) => {
    let total = 0;
    for (let i of args) {
        if(Number.isNaN(+i)) {
            throw new Error('Your data is invalid!');
        }
        total += i;
    }
    return total;
}

export {sum}
