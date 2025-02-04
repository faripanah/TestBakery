/* // The data model for user is as follows
{
    "name": "Matti Seppänen",
    "password": "M@45mtg$",
    //?????"username": "mattis",
    //?????"confirm password": "M@45mtg$",
    "address": "Mannerheimintie 14, 00100 Helsinki",	
    "phone": 0446567911,
    "email": "matti@gmail.com"
}
 */

let userArray = [];
let nextId: 1;
function getAll(){
    return userArray;
}

function addOne(userData){
     // Check if any parameter is empty or undefined
  const { name, password, username, address, phone , email} = userData;
  if (!name || !password || !username || !address || !phone ||!email) {
    return false;
  }
  const newItem ={ 
    id: nextId++,
    ...userData,
  }


}
