function solution(n) {
    // console.log(n.toString(2).split("1"));
    // console.log(n.toString(2).split("1").length);
    let number = n.toString(2).split("1").length;
    while(true) {
        n++;
        if(number === n.toString(2).split("1").length) {
            return n
        }
    }
}