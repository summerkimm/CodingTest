function solution(s) {

//   if (s.length !== 4 || s.length !== 6) { // 안 되는 이유????
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}