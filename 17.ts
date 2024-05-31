let guests: string[] = ["Amy", "Elanor", "ALex"]
let invitation: string = ", you are invited for dinner at my place!"
let absent: string = "Alex"
let new_guest: string = "Josh"

console.log(guests[0]+invitation);
console.log(guests[1]+invitation);
console.log(guests[2]+invitation);

guests[2] = new_guest

console.log(guests[2]+invitation);
console.log(absent, "is not coming to the dinner tonight.");

console.log("Guys, I found a bigger table so, I'm gonna invite 3 more people!");

guests.unshift("Yun");
guests.splice(2, 0, "John");
guests.push("Oliver");

console.log(guests[0]+invitation);
console.log(guests[2]+invitation);
console.log(guests[5]+invitation);

console.log("Sorry guys, I can only invite 2 people today.");
while(guests.length>2){
    let remove = guests.pop()
    console.log("Sorry", remove+ ", you are not invited.");
}

let message: string = ", you are still invited."
console.log(guests[0]+message);
console.log(guests[1]+message);

guests.splice(0, 2);
console.log(guests);