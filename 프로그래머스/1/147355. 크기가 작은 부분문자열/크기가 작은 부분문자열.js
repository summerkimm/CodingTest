function solution(t, p) {
    let count = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let word = t.substr(i, p.length);
        if(+word <= p) count++;
        
    }

    return count;
}