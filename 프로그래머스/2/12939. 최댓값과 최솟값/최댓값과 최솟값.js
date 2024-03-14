function solution(s) {
    let answer = [];
    let array = s.split(" ");
    let min_number = Math.min(...array);
    answer.push(min_number);
    let max_number = Math.max(...array);
    answer.push(max_number);
    const result = answer.join(" ");
    return result;
}