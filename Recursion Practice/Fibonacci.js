function fibonacci(n) {
    console.log(n)
    if (n === 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci (n-2);
    }
}

fibonacci(7);