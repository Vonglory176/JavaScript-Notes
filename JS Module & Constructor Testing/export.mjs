//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour <-- Use For Constructors !!!

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {console,log('draw')}
    }
}

const myCircle = createCircle(1)

//Constructor Function   -   //Typically better for object creation, simply given it's more familiar to other..             
function Circle(radius) {    //..Developers used to working in other languages. Otherwise, exactly the same as Factory
    this.radius = radius
    this.draw = function() {console.log('draw')}
}

const circle = new Circle(1)

/* -Define all properties inside of the cosntructor function
   -Define all methods outside of the constructor function, using the 'prototype' keyword. Then all created..
    ..objects share one copy of the code
   -It is best to define those prototype methods immediately following the object definition code, rather..
    ..spread out at other locations in your code.*/

////////////////////////////////////////////////////////////////////////
//Module Practice

// export let Grape = function() {
//     this.color = pColor
//     this.weight = pWeight
//     this.calcCost = function() {
//         return (this.weight * .11)
//     }
// }

//export default User
//export {User} //If not setting 'default', use brackets
//export { printName, printAge } 

export default class User { //Can also do this, exporting via inline. (YOU CAN ONLY USE 'default' FOR ONE EXPORT)
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

User.prototype.newProperty = "Added a new property to all Objects of this type! (Current & Future)" //Using Prototype

export function printName(user) {
    console.log(`User's name is ${user.age}`) // ` allows the use of inline variables!
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}

