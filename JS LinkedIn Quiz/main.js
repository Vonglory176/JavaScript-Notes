console.log('Question 1: ')// "What does this code print to the console?" 

const myFunc = () => {
    const a = 2;
    return () => console.log("a is " + a);
};

const a = 1;

const test = myFunc();
test(); //(Correct! 'a is 2')

//////////////////////////////////////////////////////////////

//console.log('Question 2: ')// "Which statement correctly imports this code from 'some-file.js'?"(CHANGE FILE EXT TO 'mjs' TO WORK WITH NODE)

//some-file.js
//export const printMe = str => console.log(str);

//import { printMe } from './import.mjs'; //Must be in curly braces
//console.log(printMe)

//////////////////////////////////////////////////////////////

//Question 3: "What is unique about a generator function?"
//"The function can be paused and then resumed at a later point"

//////////////////////////////////////////////////////////////

console.log('Question 4: ')// "What is the output of this code?"

let value1 = 2
let value2 = 4 

console.log(value1+value2)
console.log(value2/value1)

value1 *= value1 + value2 * value2 / value1
console.log(value1) //Guess is 24 (WRONG) --- PEMDAS -> 20 (CORRECT)

//////////////////////////////////////////////////////////////

//Question 5: "What line of code causes this to throw an error?"

const lion = 1
let tiger = 2
var bear

//++lion //Guess is 'lion' const value being changed (CORRECT)
bear += lion + tiger
tiger++

//////////////////////////////////////////////////////////////

console.log('Question 6: ')//What is the output of this code?

if(true){
    var first = 'You'
}

function fScope(){
    var second = "got this!"
}

fScope()            //Guess is 'You, Reference Error' (CORRECT)
console.log(first)
//console.log(second)

//////////////////////////////////////////////////////////////

console.log('Question 7: ')//What will be logged to the console?

const x = 6 % 2 //'%' is remainder. Closest whole divide for 7/2 is 3, with 0.5 rounded up to 1 as that remainder..
//                ..Here with 6/2, division is perfect at 3, so the remainder is 0 (Which shows as 'false' in Boolean)

const y = x ? 'One': 'Two' //Total guess, 'One' (WRONG) --> 'Two' (CORRECT)
console.log(y)

//////////////////////////////////////////////////////////////

console.log('Question 8: ')//What is printed output when div containing "Click Here" is clicked? (SEE HTML)

document.querySelectorAll("div").forEach(e => {
    e.onclick = e => console.log(e.currentTarget.id) //Guess is C (WRONG) --> C, B, A (CORRECT)
})

//document.getElementById("C").onclick = e => console.log(e.target.id)
//document.getElementById("C").onclick = e => console.log(e.currentTarget.id)

//KEEP IN MIND THAT EVERY DIV HAS AN EVENT LISTENER IN THIS CASE
//"target" shows the specific target x times depending on how nested it is                  //Reference instead of return
//"currentTarget" shows the target and the full route of nested elements to get it, if any  //Return instead of reference

//BUBBLING: When an event happens on an element, it first runs the handlers on it.. 
//          ..then on its parent, then all the way up on other ancestors. This is what 'currentTarget' does

//"'target' grabs the element that initiated the event, it doesn’t change through the bubbling process."

//////////////////////////////////////////////////////////////

console.log('Question 9: ')//What statement can be used to grab the ELEMENT containing the text "...Linked In learning Library..."? (SEE HTML)

//console.log(document.querySelector(".content")) //Only grabs the first itteration, unlike querySelectorAll
//console.log(document.querySelector("div.content"))
//console.log(document.querySelector("div.span"))
console.log(document.querySelector("span.content")) //My Guess, as you're using CSS wording for the selector (CORRECT)
//                                                    Mind that this is querySelector, not querySelectorAll

//////////////////////////////////////////////////////////////

console.log('Question 10: ')//What two values will this code print?

function printA() {
    console.log(answer)
    var answer = 1      //Guess is undefined twice, as log is before declaration (CORRECT)
}

printA()
printA()

//////////////////////////////////////////////////////////////
//                                                                                       (Or Self-Invoking Function)                        
//console.log('Question 11: ')// What statement represents the starting code converted to "Immediately Invoked Function" (IIFE)

// function () {
//     console.log('lorem ipsum')
// }

//      TO

// (function () {
//     console.log('lorem ipsum') //CORRECT, though error for some reason???
// })()

/*The self-executing anonymous function is a special function which is invoked right after it is defined. 
There is no need to call this function anywhere in the script. This type of function has no name and.. 
..hence it is called an anonymous function. The function has a trailing set of parenthesis. 
The parameters for this function could be passed in the parenthesis. */

//////////////////////////////////////////////////////////////

console.log('Question 12: ')// What will this code print?

const testObj = {
    d: 4,
    e: 5,
    testObj2: {
        f: 6,
        g: 7
    }
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
    ...testObj //Dots merge object properties, while not having any simply sticks one full object into the other
}

const obj2 = {
    ...obj, //This doesn't put obj fully into obj2, it dumps all of obj's properties into obj2
    a: 0,   
}           //Guess is it'll throw an error, given obj2.b has no reference (WRONG)
//            Output was actually '0 2'! (CORRECT)

//            

console.log(obj2.a, obj2.b, obj2.d, obj2.testObj2.g)

//////////////////////////////////////////////////////////////

console.log('Question 13: ')//What value is printed to the console after this code executes?

let cat = Object.create({ type: "lion", test: "ecksdee" }) //These are embedded in console, but following not
console.log(cat)
cat.size = "large"

let copyCat = { ...cat }                     //SEARCH OBJECT CONSTRUCTORS
cat.type = "tiger"

console.log(copyCat)

console.log(copyCat.type, copyCat.size) //Guess is "Tiger Large" (WRONG) --> 'undefined, large'(CORRECT) ??????????

//////////////////////////////////////////////////////////////

console.log('Question 14: ')//