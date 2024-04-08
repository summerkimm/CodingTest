function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i);
        }
    }
    let count = 0;
    arr.map((val) => {
        if(val % 2 !== 0) {
            count++;
        }
    })
    return count;
}