function solution(my_string) {
    let string = my_string
    let answer = Array(52).fill(0);
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < my_string.length; i++) {
        let idx = ALPHABET.indexOf(my_string[i]);
        answer[idx] += 1;
    }
    return answer;
}