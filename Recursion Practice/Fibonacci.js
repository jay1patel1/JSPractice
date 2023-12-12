function fibonacci(n) {
    if (n === 1) {
        return 1;
    } else {
        let retunValue = (fibonacci(n)-1) + (fibonacci(n)-2);
        return retunValue;
    }
    console.log(n)
}

fibonacci(7);