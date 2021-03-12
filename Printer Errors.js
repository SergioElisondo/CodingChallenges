function printerError(s) {
    let errorChar = 0
    let i
    let j
    let charCauseError = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (j = 0; j < charCauseError.length; ++j) {
      for (i = 0; i < s.length; ++i){
        if(s[i] === charCauseError[j]){
          errorChar++
        }
      }
    }
    return errorChar + "/" + i
}