function solution(s) {
    let answer = true;
    
    if(s.length !== 4 || s.length !== 6) {answer = false};
    let word = s.split("").map((val) => +val);
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "NaN") {answer = false};
    }
    return answer;
}