function composeFunctions(func1, func2, value) {
    const intermediateResult = func1(value);
    return func2(intermediateResult);
}

// Example usage:
const addTwo = x => x + 2;
const square = x => x * x;

const result = composeFunctions(addTwo, square, 3); 
console.log(result);
