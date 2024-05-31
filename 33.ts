let num: number[] = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < num.length; i++){
    let number = num[i]
    let ord: string;

    if (number === 1) {ord = 'st'}
    else if (number === 2) {ord = 'nd'}
    else if (number === 3) {ord = 'rd'}
    else {ord = 'th'}
console.log(number+ord)
}