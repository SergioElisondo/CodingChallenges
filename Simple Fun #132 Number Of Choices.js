function numberOfCarries(a, b) {
    const lenA = `${a}`.length
    const lenB = `${b}`.length

    let len = lenA > lenB ? lenA : lenB
    let i = 0

    let carry = 0
    let totalCarry = 0

    while (i < len){
        const numA = a % 10
        const numB = b % 10

        if (numA + numB + carry > 9){
            carry = 1
            totalCarry++
        }else{
            carry = 0
        }

        a = Math.floor(a/10)
        b = Math.floor(b/10)

        i++
    }
    return totalCarry
  
  
}