function solution(my_string) {
    let strArr = my_string.split(" ")
    let answer = +strArr[0];
    
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === '+') {
            answer += +strArr[i+1]
        } else if (strArr[i] === '-') {
            answer -= +strArr[i+1];
        }
    }
    return answer;
}