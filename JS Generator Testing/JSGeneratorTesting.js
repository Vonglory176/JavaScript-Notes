//GENERATOR FUNCTION PRACTICE
function* simpleGenerator() { //Generator, '*' changes it from normal function
    console.log("Before 1")
    yield 1 //Yield is a special type of return only for Generator functions
    console.log("After 1")
    console.log("Before 2")
    yield 2
    console.log("After 2")
    console.log("Before 3")
    yield 3 //Returns a generator object by the end of the run
    console.log("After 3")
}

const generatorObject1 = simpleGenerator()
const generatorObject2 = simpleGenerator() //Can use the gen multiple times simultaniously

console.log(generatorObject1)
console.log(generatorObject1.next()) //Generator reads code from top/current spot to first yield when '.next()' is used...
                                      //...then pauses and waits for it again, then rinse and repeat with the following yield(s)
console.log(generatorObject2.next())
console.log(generatorObject2.next()) //Returned obj always has a 'value' and 'done' prop
console.log(generatorObject2.next())
console.log(generatorObject2.next()) //Returns 'undefined' for id and 'true' for done after all yields already fired

// while (object.next().done !== false) {} //Is sometimes used to keep generator looping until finished

//console.log(simpleGenerator.length)
//len(list(gen))

/////////////////////////////////////////////////////////////////////////////

console.log("Infinite loop")
function* generateId1() {
    let id =1 //First .next() does everything outside Loop
    console.log("reset")

    while (true) {
        console.log("loop start")
        yield id//Loop ends here..
        id++ //..But starts again here, immediately yielding the new id after!!
        console.log("loop end")
    }
}

const generatorObject3 = generateId1()
for (let i=0;i<5;i++) console.log(generatorObject3.next());

/////////////////////////////////////////////////////////////////////////////

console.log("Incrementing Loop")
function* generateId2() {
    let id = 1

    while (true) {
        const increment = yield id
        increment != null? id += increment : id++
    }
}

const generatorObject4 = generateId2()
for (let i=0;i<3;i++){
    console.log(generatorObject4.next())  //Passing a value to 'next()' first iteration does nothing..
                                          //..given there's no current return value to use

    console.log(generatorObject4.next(2)) //Adds to the current id return value as declared 'const increment' in loop
}

//console.log(generatorObject4.throw(new Error('Test'))) //'.throw' stops everything and gives an error message

console.log(generatorObject4.return(100)) //Using 'return()' instead of 'next()' ends the generator..
                                          //..with 'done=true', preventing further iteration returns
console.log(generatorObject4.next())

/////////////////////////////////////////////////////////////////////////////

console.log("Array Element Return Loop")
function* generator(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i]
    }
}

const generatorObject5 = generator([1,3,5])
for (let i=0;i<4;i++) console.log(generatorObject5.next());