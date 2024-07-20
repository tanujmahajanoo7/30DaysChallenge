const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combinedNumbers = [...numbers, ...moreNumbers,'m','n']; // [1, 2, 3, 4, 5, 6]

console.log(combinedNumbers);