function solution(a, b) {
    let answer = 0;

    // 기약분수 만들기 
    for(let i = 2; i < b + 1; i++) {
       if (a % i === 0 && b % i === 0) {
            a /= i;
            b /= i;
        }
    }

    // 분모를 2나 5로 나누기
    while(b % 2 === 0) b /= 2
    while(b % 5 === 0) b /= 5
    
    return b === 1 ? 1: 2
}