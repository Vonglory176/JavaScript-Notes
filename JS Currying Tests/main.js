//Currying, named after Haskell B. Curry, concept from lambda calculus

//Currying takes a function that receives more than one parameter..
//..and breaks it into a series of unary (one parameter) functions

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich) //Output: "Bacon, Lettuce, Tomato"

//It works but it's ugly and increasingly nested. Here's the refactored:

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`
const mySammy = buildSammy("Bacon")("Lettuce")("Tomato")
console.log(mySammy) //Output: "Bacon, Lettuce, Tomato"

/////////////////////////////////////////// Another example of currying:

const multiply = (x, y) => x * y
const curriedMultiply = x => y => x * y

console.log(multiply(2, 3))
console.log(curriedMultiply(2)(3))

console.log("Non Curry, one parameter: " + multiply(2))      //Returns 'NaN'
console.log("Curried, one parameter: " + curriedMultiply(2)) //This shows what is still missing (y), returns "y => x * y"

//Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10)
console.log(timesTen(8)) //Output is '80', because first para (10) was already given in 'timesTen' declaration

//Another example:
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content
const updateHeaderText = updateElemText('test')   //Works with this but not querySelectorAll
updateHeaderText('Hello Von!')

//Another common use of currying is function composition (My brain is frazzled past this point)
//Allows calling small functions in a specific order
// https://youtu.be/I4MebkHvj8g?t=710

const addCustomer = fn => (...args) => {
    console.log('saving customer info...')
    return fn(...args)
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`order #${[...args].toString()} completed`)
}

completeOrder = (processOrder(completeOrder))
completeOrder = (addCustomer(completeOrder))
completeOrder("1000")

// OUTPUT //
// saving customer info...
// processing order #1000
// order #1000 completed

// function addCustomer(...args) {
//     return function processOrder(...args) {
//         return function completeOrder(...args) {
//             //end
//         }
//     }
// }

//Requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) return curried.bind(null, ...args) //.bind -- https://www.youtube.com/watch?v=g2WcckBB_q0
        return fn(...args)
    }
}

const total = (x,y,z) => x + y + z

const curriedTotal = curry(total)
console.log(curriedTotal(10)(20)(30))