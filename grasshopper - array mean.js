var findAverage = function (nums) {
    let numsAdded = nums.reduce((a, b) => a + b, 0)
    let numMean = numsAdded / nums.length
    return numMean
}

// refactored below

const findAverage = nums => nums.reduce((a, b) => a + b, 0) / nums.length