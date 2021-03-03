function inArray(array1, array2){
    return array1.filter(ending => {
        return array2.some(word => word.includes(ending))
    }).sort()
}