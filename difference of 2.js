function twosDifference(input){
    const final = []
   
    for(let i = 0; i < input.length; i++){
       for(let j = i + 1; j < input.length; j++){
           const num1 = input[i]
           const num2 = input[j]
   
           if(Math.abs(num1 - num2) === 2){
               final.push([Math.min(num1, num2), Math.max(num1, num2)]) 
           }
       }
    }
       return final.sort((a,b) => a[0] - b[0])
   }