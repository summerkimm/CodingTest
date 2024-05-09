function solution(numlist, n) {
    const arr = numlist.map((val) => Math.abs(val - n))
    console.log(arr);
}