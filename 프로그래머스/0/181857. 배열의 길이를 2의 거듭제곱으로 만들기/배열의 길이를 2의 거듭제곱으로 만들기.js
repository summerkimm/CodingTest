function solution(arr) {
    let a = 0;
    while(Math.pow(2, a) < arr.length) {
        a++;
    }

    let fillNum = Math.pow(2, a) - arr.length;
    let newArr = Array(fillNum).fill(0);

    return [...arr, ...newArr];
}