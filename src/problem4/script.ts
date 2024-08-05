function sum_to_n_a(n: number): number {
    if (n === 0) {
        return n;
    }

    return n + sum_to_n_a(n > 0 ? n - 1 : n + 1);
}

function sum_to_n_b(n: number): number {
    for (let i = (n > 0 ? n - 1 : n + 1); (n > 0 ? i > 0 : i < 0); (n > 0 ? i-- : i++)) {
        n += i;
    }

    return n;
}

function sum_to_n_c(n: number): number {
    return Array(Math.abs(n)).fill(0).map((_, i) => (n > 0 ? 1 : -1) * (i + 1)).reduce((sum, num) => sum + num, 0);
}

console.log("Summation:");
console.log("sum_to_n_a: " + sum_to_n_a(-100));
console.log("sum_to_n_b: " + sum_to_n_b(-100));
console.log("sum_to_n_c: " + sum_to_n_c(-100));

console.log("___");

console.log("sum_to_n_a: " + sum_to_n_a(100));
console.log("sum_to_n_b: " + sum_to_n_b(100));
console.log("sum_to_n_c: " + sum_to_n_c(100));
