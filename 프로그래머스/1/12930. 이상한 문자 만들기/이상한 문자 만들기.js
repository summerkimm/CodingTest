function solution(s) {
    let answer = [];
    let arr = s.toUpperCase().split(" ");
    for(let i = 0; i < arr.length; i++) {
        let word = '';
        for(let j = 0; j < arr[i].length; j++) {
            if(j % 2 !== 0) {
                word += arr[i][j].toLowerCase();
            } else {
                word += arr[i][j];
            }
        }
        answer.push(word);
    }
    return answer.join(" ");
}