function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((acc, current) => acc + current, 0)
}

// refactored below

const squareSum = numbers => numbers.map(n => n ** 2).reduce((acc, current) => acc + current, 0)