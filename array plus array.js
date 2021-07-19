function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)
}

// or you can do it like this too!

function arrayPlusArray(arr1, arr2){
    return arr1.concat(arr2).reduce((a,b) => a+b, 0)
}