function multiTable(number) {
    return `1 * ${number} = ${1 * number}
2 * ${number} = ${2 * number}
3 * ${number} = ${3 * number}
4 * ${number} = ${4 * number}
5 * ${number} = ${5 * number}
6 * ${number} = ${6 * number}
7 * ${number} = ${7 * number}
8 * ${number} = ${8 * number}
9 * ${number} = ${9 * number}
10 * ${number} = ${10 * number}`
}

// or you can write a for loop instead

const multiTable = (number) => {
    const numberTable = []
    for (let i = 1; i <= 10; i++) {
        numberTable.push(`${i} * ${number} = ${i * number}`)
    }
    return numberTable.join('\n')
}