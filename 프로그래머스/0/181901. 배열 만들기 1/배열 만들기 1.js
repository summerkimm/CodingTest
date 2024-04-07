function solution(n, k) {
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
        let number = k * i
        if(number <= n) {
            answer.push(number);
        }
    }
    return answer
}