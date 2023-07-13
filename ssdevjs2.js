const product = {
    Name : 'shirt',
    Price : '$28',
    ['colour'] : 'Red',
    rating : {
        stars : 4.5,
        count : 87
    },
    fun : function function1()
        {
            console.log('function inside object')
        }

}

console.log(product)
console.log(product.name)

// console.log(product.colour) //error
// console.log(product['colour']) //undefined if not created 

console.log(product.rating)
console.log(product.rating.stars)

console.log(product.fun)

// METHOD  ------------------------ (function inside object) for ex -: console.log()

product.fun() 