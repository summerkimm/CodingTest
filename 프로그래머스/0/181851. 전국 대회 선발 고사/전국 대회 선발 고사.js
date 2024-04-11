function solution(rank, attendance) {
    let arr = [];
    
    // 1등부터 해당 인덱스 찾기
    for(let i = 1; i <= rank.length; i++) {
        console.log(rank.indexOf(i));
        let index = rank.indexOf(i);
        console.log(attendance[index]);
        attendance[index] && arr.length < 3 && arr.push(index);
        console.log(arr)
    }
    const [a, b, c] = arr;
    return (10000 * a) + (100 * b) + c
}