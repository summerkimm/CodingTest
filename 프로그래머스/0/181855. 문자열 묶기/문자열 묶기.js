function solution(strArr) {
    const arr = strArr.map((x) => x.length);
    const arr_length = {};
    arr.map((x) => arr_length[x] = (arr_length[x] ?? 0) + 1);
    return Math.max(...Object.values(arr_length));
}