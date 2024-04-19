function solution(array, height) {
    let answer = 0;
    array.forEach((val) => {if(val > height) answer++}) 
    return answer;
}