function solution(id_pw, db) {
    let answer = "fail";
    db.map((val) => {
        if(val[0] === id_pw[0] && val[1] === id_pw[1]) return answer = "login";
        if(val[0] === id_pw[0] && val[1] !== id_pw[1]) return answer = "wrong pw";
    })
    return answer;
}