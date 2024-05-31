let person03: string = "eRiC JoSh"
console.log(person03.toUpperCase());
console.log(person03.toLowerCase());
console.log(person03.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '))
