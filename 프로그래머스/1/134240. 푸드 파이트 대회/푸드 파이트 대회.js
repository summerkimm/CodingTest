function solution(food) {
    let answer = '';
    for(let i = 1; i < food.length; i++) {
        if(food[i] === 1) continue;
        let a = parseInt(food[i] / 2);
        answer += String(i).repeat(a);
    }
    // answer += '0';
    let answer_reverse = [...answer].reverse().join("")
    answer = answer + "0" + answer_reverse;
    return answer
}