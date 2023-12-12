function fibonacci(n) {
    let value = n;

    // Value sanity check
    if (typeof value !== "number") {
        let convertedValue = parseInt(value);
        if (isNaN(convertedValue)) {
            console.log("The entered value is not a number");
            return;
        } else {
            value = convertedValue;
        }
    }

    // Check it is positive value
    if (value < 0) {
        console.log("The entered Value is smaller than zero");
        return;
    }

    // Fibonacci Calculator Function
    function fibonacciCalc(x) {
        if ( x <= 1) {
            return x;
        } else {
            return (fibonacciCalc (x-1) + fibonacciCalc(x-2))
        }
    }

    // Return Code 
    console.log(fibonacciCalc (value));
}

fibonacci(10);
// Result: 55
fibonacci(2);
// Result: 1
fibonacci(-10);
// Result: The entered Value is smaller than zero