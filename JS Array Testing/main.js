const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25   }
]
console.log(`Base Array! `,items)

const filteredItems1 = items.filter((item) => { //'filter' works through each item of an array, and returns another.. 
    return item.price <= 100                   //..of those items that passed any given checks
})
console.log(`Using filter! `, filteredItems1)

const filteredItems2 = items.map((item) => { //'map' creates a new array based upon what part of the original you query
    return item.price
})
console.log(`Using map! `,filteredItems2) 

///////////////////////////////////////////////////////////////////////////WATCH REST OF ARRAY METHOD VIDEO 
                                                                         //https://youtube.com/watch?v=R8rmfD9Y5-c&feature=share

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

console.log(largeCountries)
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)
largeCountries.pop()
largeCountries.push("Pakistan")
console.log(largeCountries)

//pop() AND shift() remove elements from an array. Pop() from the end and shift from the start
//push() AND unshift() add elements to an array. Push() to the end and unshift() to the start

