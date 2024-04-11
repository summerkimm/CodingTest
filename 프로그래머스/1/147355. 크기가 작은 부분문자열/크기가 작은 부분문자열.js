function solution(t, p) {
    // p의 문자열 길이만큼 t 자르기
    const P = p.length;
    
    let arr = [];
    // 반복문을 사용해 t 자르기
    for(let i = 0; i <= t.length - P; i++) {
        let word = t.slice(i, i + P);
        // 자른 문자열 배열에 넣기
        arr.push(+word)
    }

    let count = 0;
    arr.forEach((val) => {
        val <= +p && count++
    });
    return count;
}