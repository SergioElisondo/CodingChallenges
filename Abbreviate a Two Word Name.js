function abbrevName(name){
  const array = name.split(' ')
  const firstName = array[0]
  const lastName = array[1]
  const output = firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase()

  return output
}