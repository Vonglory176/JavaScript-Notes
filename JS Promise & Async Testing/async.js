function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        location === 'Google' ? resolve('Google says hi') : reject('We can only talk to Google')
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

///////////////////////////////////////////////// Promise Call

// makeRequest('Google').then(response => {
//     console.log('Response Recevied')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(error => {
//     console.log(error)
// })

///////////////////////////////////////////////// Rewritten Async

// async function doWork(){
//     try {
//         const response = await makeRequest('Google') //Waits until this call finishes
//         console.log('Response Received')
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err) {}
// }

// doWork()

///////////////////////////////////////////////// Testing With HW4

function Workout(exercise, minutes, calories) {
    this.exercise = exercise
    this.minutes = minutes
    this.calories = calories
}
const workoutArray = []

function Radio(id, checked) {
    this.id = id
    this.checked = checked
}
const radioArray = []
for (i = 1; i < 4; i++) radioArray.push(new Radio(i, false))

radioArray[0].checked = true
console.log(radioArray)

console.log('Add button clicked')

function radiocheck(){
    return new Promise((resolve, reject) => {
        radioArray.forEach(i => { if(i.checked) resolve(i.id) })
        reject("Pick an exercise")
    })
}

function minuteInputCheck(){
    return new Promise((resolve, reject) => {
        let input = 1 
        input > 0 ? resolve(input) : reject( input === 0 ? "Lazy!" : "Use a real number for minutes") /*Maybe add funny alert for 0?*/
    })
}

async function addButtonClicked(){
    try {
        const radio = await radiocheck()
        console.log(radio)
        const minutes = await minuteInputCheck()
        console.log(minutes)

        let caloriesPerMin

        radio === 1 ?    (exercise = 'Sit Ups', minutes, caloriesPerMin = 10) : //First Button?
            radio === 2 ?    (exercise = 'Push Ups', minutes, caloriesPerMin = 15) : //Second Button?
                                 (exercise = 'Jump Rope', minutes, caloriesPerMin = 18) //Third Button!

        workoutArray.push(new Workout(exercise, minutes, caloriesPerMin * minutes))
        console.log(workoutArray)
                
    } catch (error) { alert(error) } //Custom Error, depending on faliure
}
addButtonClicked()

    // const radioCheck = new Promise((resolve, reject) => { 

    //     document.querySelectorAll('input[name="exerPick"]').forEach(i => { //Iterating all input elements with name 'exerPick'
    //         if(i.checked) resolve(i.id)}) //Returns ID of checked
    //     reject("pick an exercise")

    // }).catch()

    // const minuteInputCheck = new Promise((resolve, reject) => {

    //     let input = parseInt(document.getElementById('minuteInput').value) 
    //     input >= 0 ? resolve(input) : reject("use a real number for minutes") /*Maybe add funny alert for 0?*/

    // }).catch()

    // Promise.all([ radioCheck, minuteInputCheck ]).then((values) => { //values = [ RadioId, Minutes ]

    //     let exercise = '', minutes = '', calories = ''

    //     values[0] === 'radio1' ?    (exercise = 'Sit Ups', minutes = values[1], calories = (minutes * 10)) : //First Button?
    //         values[0] === 'radio2' ?    (exercise = 'Push Ups', minutes = values[1], calories = (minutes * 15)) : //Second Button?
    //                                         (exercise = 'Jump Rope', minutes = values[1], calories = (minutes * 18)) //Third Button!

    //     workoutArray.push(new Workout(exercise, minutes, calories))
    //     console.log(workoutArray)
                
    // }).catch((error) => {alert(`Please be sure to ${error}!`)}) //Custom Error, depending on faliure