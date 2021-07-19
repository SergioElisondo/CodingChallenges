function removeEveryOther(arr) {
    let newArray = []
    for (i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i])
    }
    return newArray
}

// or you can use a different method

function removeEveryOther(arr) {
    return arr.filter((element, index) => index % 2 === 0)
}