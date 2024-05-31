let magician_1: string[] = ['Harry Potter', 'Voldemort', 'Severus Snape'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push(magician + " The Great");
    }
    return modifiedMagicians;
}

let modifiedMagiciansArray = make_great([...magician_1]);

console.log("Original magician names:");
show_magicians(magician_1);
console.log("\nModified magician names:");
show_magicians(modifiedMagiciansArray);
