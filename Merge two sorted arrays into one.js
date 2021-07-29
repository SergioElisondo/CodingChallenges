function mergeArrays(arr1, arr2) {
let combined = arr1.concat(arr2).sort((a,b) => a-b).filter((el, i, arr) => arr.indexOf(el) === i)
return combined
}

// refactored with a different concatenation

const mergeArrays = (arr1, arr2) => arr1.concat(arr2).sort((a,b) => a-b).filter((el, i, arr) => arr.indexOf(el) === i)

// using Array.from() and Set()

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

// using ... 

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b );
}