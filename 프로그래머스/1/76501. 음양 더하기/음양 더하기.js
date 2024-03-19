function solution(absolutes, signs) {
  let arr = [];

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      arr.push(absolutes[i]);
    } else {
      arr.push(-1 * absolutes[i]);
    }
  }

  let sum = 0;
  arr.forEach((el) => (sum += el));
  return sum;
}