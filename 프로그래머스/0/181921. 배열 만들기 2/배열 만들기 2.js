function solution(l, r) {
    const arr = []
    for(let i = l ; i <= r ; i ++) {
        if([...String(i)].every((el) => el === '0' || el === '5')) arr.push(i)

    }
    return arr.length ? arr : [-1]
}