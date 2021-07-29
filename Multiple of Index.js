function multipleOfIndex(array) {
  return array.filter((el, i) => el % i === 0);
}

// using a for loop
function multipleOfIndex(arr) {
  let arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % i == 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

// refactored
const multipleOfIndex = arr => arr.filter((el, i) => el % i === 0 )
