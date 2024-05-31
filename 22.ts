// intentional index error
let number: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(number[8]);     // Result= undefined

// correcting error
console.log(number.length);
console.log(number[5]);