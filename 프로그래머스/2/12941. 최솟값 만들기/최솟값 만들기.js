function solution(A,B){
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let answer = 0;
  
  for(let i = 0; i < A.length; i++) {
      let sum = A[i] * B[(A.length - 1) - i];
      answer += sum;
  }
  return answer;
}