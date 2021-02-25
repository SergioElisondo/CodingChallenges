function minValue(values){
    let organized = values.sort()
    let lowerNum = []

    for(let i = 0; i < organized.length; i++){
        if(lowerNum.indexOf(organized[i] === -1)){
            lowerNum.push(organized[i])
        }
    }
    return Number(lowerNum.join('')
}

//7kyu