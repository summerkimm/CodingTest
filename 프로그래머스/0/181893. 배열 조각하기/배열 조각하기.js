function solution(arr, query) {
    for(let i = 0; i < query.length; i++){
        if(i % 2 === 0) {
            arr.splice(query[i] + 1)
            console.log(arr)
        } else {
            arr.splice(0, query[i])
            console.log(arr)
        }
    }
    return arr

}