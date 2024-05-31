import "core-js/features/array/includes";
import "core-js/features/string/includes";


let current_Users: string[] = ['Mike', 'Dustin', 'William', 'Max', 'John'];
let new_Users: string[] = ['Charlie', 'JOHN', 'Mike', 'Bob', 'Sally'];

let currentUserLower:string[] = current_Users.map(user => user.toLowerCase())
for (let newUsers of new_Users) {
        if (currentUserLower.includes(newUsers.toLowerCase())) {
            console.log('Sorry, '+newUsers+ ' is already taken. Please choose a different username.');
                  } 
                  else {
                    console.log(newUsers+' is avaliable.')
                  }
    }
   


// new_users.forEach(newUser => console.log(newUser))
// for (let newUsers of new_Users){
    //console.log(new_Users)
//}



