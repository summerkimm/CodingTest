function solution(spell, dic) {
    var answer = 0;
    let a = spell.sort().toString();
    console.log(a);
    for(let i = 0; i < dic.length; i++) {
        let word = dic[i].split('').sort().toString();
        console.log(word);
        if(a === word) {return answer = 1} else {answer = 2;}
    }
    return answer;
}