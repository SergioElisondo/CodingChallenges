function fizzbuzzing(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return 'FizzBuzz'
    } else if (n % 3 == 0) {
        return 'Fizz'
    } else if (n % 5 == 0) {
        return 'Buzz'
    } else {
        return n
    }
}
// Return array
function fizzbuzz(n) {
    let results = []
    for (let i = 1; i <= n; i++) results.push(fizzbuzzing(i))
    return results
}