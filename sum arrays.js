function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}; 

// or write it like this

const sum = numbers => numbers.reduce((a,b) => a+b, 0)