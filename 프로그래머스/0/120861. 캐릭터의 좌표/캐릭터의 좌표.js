function solution(keyinput, board) {
    let key = [0, 0];
    
    keyinput.forEach((val) => {
        switch(val) {
            case "up": {
                if(key[1] < (board[1] - 1) / 2) key[1] += 1;
                break;
            }
            case "down": {
                if(key[1] > (board[1] - 1) / 2 * -1) key[1] -= 1;
                break;
            }
            case "left": {
                if(key[0] > (board[0] - 1) / 2 * -1) key[0] -= 1;
                break;
            }
            case "right": {
                if(key[0] < (board[0] -1) / 2) key[0] += 1;
                break;
            }
        }
    })
    return key;
    console.log(key);
}