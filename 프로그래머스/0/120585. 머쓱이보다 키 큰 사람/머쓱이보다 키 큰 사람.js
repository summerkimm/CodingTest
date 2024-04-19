function solution(array, height) {
    let answer = 0;
    array.forEach((val) => val > height && answer++) 
    return answer;
}