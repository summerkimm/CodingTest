function solution(nums) {
    
    const set = new Set(nums);
    const arr = [...set];
    console.log(arr);
    
    // 고를 수 있는 개수
    const count = nums.length / 2;
    console.log(count);
    
    // let result;
    // 선택할 수 있는 폰켓몬 종류 개수
    // result = arr.length > count ? count : arr.length;
    return arr.length > count ? count : arr.length;
}