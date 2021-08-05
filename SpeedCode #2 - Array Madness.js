function arrayMadness(a, b) {
  let aRed = a.reduce((x,y) => x + y**2, 0) 
  let bRed = b.reduce((x,y) => x + y**3, 0)
  return aRed >= bRed
}