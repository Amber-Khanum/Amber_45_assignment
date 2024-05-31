let magician1:string[] = ['Harry Potter','Voldemord','Severus Snape'];
function make_great(magician1:string[]): void {
    for(let magicians of magician1){
        console.log('The Great '+ magicians)
    }
};
make_great(magician1);