//JS Promise Testing (Promises are meant to replace Callbacks)

let p = new Promise((resolve, reject) => {
    let a = 1 + 2

    if (a === 2) resolve('Success') //Promise is always looking for resolve

    else reject('Failed') //It throws an error upon faliure

})

p.then((message1) => { //'then()' attempts to fire after promise returns Success/Failed

    console.log('This is in then, ' + message1) //Success output

}).catch((message1) => { //'catch' is used if promise return was rejected

    console.log('This is in catch, ' + message1) //Fail output

})

////////////////////////////////////////////////////////////////////////////////////////
/*EXAMPLE OF CALLBACK*/console.log('Callback Code starts here!')

// const userLeft = false, userWatch = true

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft){
//         errorCallback({
//             name: 'User left',
//             message: ':('
//         })
//     } else if (userWatch) {
//         errorCallback({
//             name: 'User is watching video',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })

/*NOW REWRITTEN AS PROMISE*/ console.log('Rewritten Promise Code starts here!')

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft){
//             reject({
//                 name: 'User left',
//                 message: ':('
//             })
//         } else if (userWatch) {
//             reject({
//                 name: 'User is watching video',
//                 message: 'WebDevSimplified < Cat'
//             })
//         } else {
//             resolve('Thumbs up')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message)
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// })

////////////////////////////////////////////////////////////////////////////////////////

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video One Recorded')
// })
// const recordVideoTwo = new Promise((resolve, reject) => { //All promises run at the same time
//     resolve('Video Two Recorded')
// })
// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video Three Recorded')
// })

// Promise.all([ //Used to check multiple promises
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// }).catch((error) => {})

// Promise.race([ //Returns as soon as the first promise is finished, giving one value instead of all
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// }).catch((error) => {})