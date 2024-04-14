function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    const newArr = arr
      .slice(s, e + 1)
      .filter((val) => val > k)
      .sort((a, b) => a - b);
    newArr.length === 0 ? answer.push(-1) : answer.push(newArr[0]);
  }
  return answer;
}