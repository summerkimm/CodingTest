function solution(nums) {
    let answer = 0; 

    for(let i = 0; i <= nums.length - 3; i++) {
        for(let j = i + 1; j <= nums.length - 2; j++) {
            for(let k = j + 1; k <= nums.length - 1; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                answer++;
                
                for(let l = 2; l <= Math.sqrt(sum); l++) {
                    if(sum % l === 0) {
                        answer--;
                        break;
                    }
                }
                // console.log(answer);
            }
        }
    }
    return answer

}