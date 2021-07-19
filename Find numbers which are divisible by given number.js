function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0)
}

// or it can be done like this

const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0)