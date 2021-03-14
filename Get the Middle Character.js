function getMiddle(s)
{
  let start
  let end
  if (s.length % 2 === 0) {
      start = Math.floor(s.length /2) - 1
      end = start + 2
  } else {
      start = Math.floor(s.length /2)
      end = start + 1
  }
  return s.substring (start, end)
}