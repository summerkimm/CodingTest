function solution(n) {
    let answer = [];
    
    for(let i = 2; i <= n; i++) {
        while (n % i === 0) {
            answer.push(i);
            n /= i
        }
    }
    return answer.filter((val, idx) => answer.indexOf(val) === idx);
}
