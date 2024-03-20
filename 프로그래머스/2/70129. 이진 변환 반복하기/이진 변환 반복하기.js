function solution(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const arr = s
      .split("")
      .map((val) => {
        if (val === "0") {
          zeroCount++;
          return;
        }
        return val;
      })
      .join("");
    s = arr.length.toString(2);
    count++;
  }
  return [count, zeroCount];
}
