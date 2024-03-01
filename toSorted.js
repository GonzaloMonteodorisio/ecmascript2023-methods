const numbers = [2, 45, 67, 12, 0, 7, -4, 5];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.info('numbers : ', numbers);
console.info('sortedNumbers : ', sortedNumbers);