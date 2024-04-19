function solution(array, n) {
    let cnt = 0;
    array.find((val) => {
        if(val === n) cnt++;
    });
    return cnt;
}