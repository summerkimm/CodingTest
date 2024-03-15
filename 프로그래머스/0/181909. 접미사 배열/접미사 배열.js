function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        let word = my_string.slice(i);
        answer.push(word);
    }
    return answer.sort();
}