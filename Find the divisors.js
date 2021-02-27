function divisors(integer) {
  let array = []
 
  for (let i = 2; i < integer; i++){
    Number.isInteger(integer/i)&& array.push(i)
  }
 
  if(array.length === 0){
    return `${integer} is prime`
  }else{
    return array
  }
}