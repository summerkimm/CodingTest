function solution(array, commands) {
    let answer = [];
    
    for(let z = 0; z < commands.length; z++) {
        let [i, j, k] = commands[z];
        let arr = array.slice(i-1, j).sort((a, b) => a - b);
        answer.push(arr[k-1]);
    }
    return answer;
}