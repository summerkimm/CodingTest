function solution(my_string) {
    let answer = 0;
    let num = my_string.match(/[0-9]+/g);
    if(num === null) {
        answer = 0;
    }else {
        answer = num.reduce((a,c) => a + Number(c), 0);
    }
    return answer;
}