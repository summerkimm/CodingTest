function solution(number, limit, power) {
  let sum = 0;
  
  for(let i = 1; i <= number; i++) {
      let count = 0;
      for(let j = 1; j <= Math.sqrt(i); j++) {
          if(i % j === 0) {
              // count++;
              (i / j !== j) ? count += 2 : count += 1
          }
      }
      count > limit ? sum += power : sum += count;
  }
  return sum;
}