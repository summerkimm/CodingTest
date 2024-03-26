function solution(n) {
    let arr = [];

    for(let i = 2; i <= n; i++) {
       while(n % i === 0) {
           n = n / i;
           arr.push(i);
        }
    }  
    let answer = arr.filter((el, idx) =>{ return arr.indexOf(el) === idx});
    console.log(answer);
    return answer;
}