//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour <-- Constructors

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