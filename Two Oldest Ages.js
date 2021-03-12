// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort(sortPop).slice(-2)
}

function  sortPop(a, b){
  return a - b
}