//arguemnts object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); //you lose access to arguments when you use an arrow function
    return a + b;
};
console.log(add(55, 1, 110));

//this keyword - no longer bound

const user = {
    name: 'John',
    cities: ['Toronto', 'Brampton', 'Mississauga'],
    //new ES6 way to make methods is straight up no semicolons: no more function keyword using
    printPlacesLived() { //using arrow function on METHODS takes this to the PARENT aka GLOBAL window!!!!
        return this.cities.map((city) => city + '!' + this.name)
    }
}
console.log(user.printPlacesLived())

//Challenge area
const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //method multiply - return a new array where the numbers have been multiplied
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        })
    }
}
console.log(multiplier.multiply())