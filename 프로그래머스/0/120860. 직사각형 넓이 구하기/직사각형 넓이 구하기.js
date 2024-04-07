function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    console.log(dots);
    const one = Math.abs(dots[0][1] - dots[1][1]);
    console.log(one);
    const theOther = Math.abs(dots[0][0] - dots[2][0]);
    console.log(theOther);
    return one * theOther;
}