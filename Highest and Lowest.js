function highAndLow(numbers) {
    const arr = numbers.split(" ")

    let maxNum = arr[0]
    let minNum = arr[0]

    for(let num of arr){
        if(Number(num) > maxNum){
            maxNum = num
        }
        if (Number(num)< minNum){
            minNum = num
        }
    }

    return maxNum + " " + minNum

}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") )// "542 -214"