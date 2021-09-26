function countPrimeNumbers() {
    let count = 0;
    let val;
    for (let i = 2; i <= 100; i++) {
    val = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        val = false;
        break;
        }
    }
    if (val) {
        count += 1;
    }
    }
    return count;
}

function repeats() {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
}

const time0 = performance.now();
setTimeout(repeats, 0);
const time1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${time1 - time0} milliseconds.`);