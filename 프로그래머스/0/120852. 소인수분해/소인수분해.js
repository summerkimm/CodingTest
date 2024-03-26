function solution(n) {
    let arr = [];

    for(let i = 2; i <= n; i++) {
       while(n % i === 0) {
           n = n / i;
           arr.push(i);
        }
    }  
    
    return answer = arr.filter((el, idx) => arr.indexOf(el) === idx);
}