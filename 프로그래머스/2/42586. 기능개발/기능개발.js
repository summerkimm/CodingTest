// function solution(progresses, speeds) {
//     let days = [];
//     let answer = [];
//     let maxDay = days[0];
//     let cnt = 1;
    
//     // 기능별 작업 완료 기간 
//     for(let i = 0; i < progresses.length; i++) {
//         let completedDay = Math.ceil((100 - progresses[i]) / speeds[i]);
//         days.push(completedDay);
//     }
//     console.log(days);

// }

function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progresses, idx) =>
    Math.ceil((100 - progresses) / speeds[idx])
  );
  let cnt = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}