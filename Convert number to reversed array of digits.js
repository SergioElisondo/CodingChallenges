function digitize(n) {
  let initialArray = (""+n).split('');
  let reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}

console.log(digitize(348597));