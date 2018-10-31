
class Person {
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return 'Hi! ' + this.name
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}
class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        greeting += ' Im visiting from ' + this.homeLocation
        return greeting
    }
}

const me = new Student('John Pawlak',29, 'Env Science');
const other = new Traveller('bob', 13, 'Toronto');
console.log(other)
console.log('name', other.name)
console.log(other.getGreeting())
console.log(other.getDescription())
console.log('Location? ',other.getGreeting())

console.log(me)
console.log('name', me.name)
console.log(me.getGreeting())
console.log(me.getDescription())
console.log('Has major? ',me.hasMajor())