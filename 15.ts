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