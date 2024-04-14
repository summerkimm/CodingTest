function solution(arr, k) {
    
    // 중복 원소 제거하기
    const arr1 = arr.filter((val, idx) => arr.indexOf(val) === idx)

    // 배열의 k만큼 넣기
    let answer = [];
    for(let i = 0; i < k; i++) {
        arr1[i] === undefined ? answer.push(-1) : answer.push(arr1[i]);
    }
    return answer;
}