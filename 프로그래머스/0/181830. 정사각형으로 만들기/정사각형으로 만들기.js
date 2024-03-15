function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if (row > col) {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row - col; j++) {
                arr[i].push(0)
            }
        }
    }
    else if (row < col) {
        let zeroArr = new Array(arr[0].length).fill(0);
        for (let i = 0; i < col - row; i++) {
            arr.push(zeroArr);
        }
    }
    return arr;
}