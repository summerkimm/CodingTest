function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [A, B] = [Math.abs(n - a), Math.abs(n - b)];
        if(A === B) return b - a
        return A - B
    })
}