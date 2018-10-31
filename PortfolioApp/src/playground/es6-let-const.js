var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar)

let nameLet = 'John';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank';

console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal'
    return petName
}
const petName = getPetName();
console.log(petName)

//block scoping
var fullName = 'Andrew Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName)
}
console.log(firstName)