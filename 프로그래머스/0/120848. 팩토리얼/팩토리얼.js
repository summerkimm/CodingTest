function solution(n) {
    let answer;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
        if(result <= n) answer = i;
    }
    return answer;
}  