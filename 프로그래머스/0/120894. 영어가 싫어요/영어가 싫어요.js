function solution(numbers) {
    const NUMBERS = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten"
    ]

    NUMBERS.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return +numbers;

}