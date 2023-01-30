//JavaScript Hoisting 
//https://youtu.be/_uTDzYyYz-U

//Declarations are Hoisted, where Initializations keep to scope (aside from event listeners..?)

console.log(x)   //Undefined Output
//console.log(y) //Error Output

var x = 5 //Declaration known by entire program, aside from the given value
let y = 5 //Initialization, only know to program once line fires

stepOne() 

//const stepOne = () => console.log('Step one') //Initialization, error
function stepOne() {console.log('Step One')} //Declaration, fires normally

////////////////////////////////////////////////////////////////////////////

const initApp1 = () => {stepTwo()} 

initApp1()

//const stepTwo = () => {console.log('Step Two')} //Cannot Access 'stepTwo' before initialization
function stepTwo () {console.log('Step Two')}

////////////////////////////////////////////////////////////////////////////

//document.addEventListener("DOMContentLoaded", initApp2) //Using listener here would break 

const initApp2 = () => {stepThree()} 

document.addEventListener("DOMContentLoaded", initApp2) 

function stepThree () {console.log('Step Three')}