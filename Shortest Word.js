function findShort(s){
    let wordsArray = s.split(' ')

    let shortest = Infinity

    for (let i = 0; i < wordsArray.length; i++){
        let wordLength = wordsArray[i].length
        if (wordLength < shortest){
            shortest = wordLength
        }
    }
    return shortest
}