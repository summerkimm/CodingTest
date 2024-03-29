function solution(nums) {
    const set = new Set(nums);

    // 고를 수 있는 개수
    const count = nums.length / 2;

    // 선택할 수 있는 폰켓몬 종류 개수
    let result = set.size > count ? count : set.size;
    return result;
}