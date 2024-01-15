let arr = [2,3,4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})

arr.forEach((element,index,arr) => {
    console.log("arrow", index, element, arr)
})

const heros = ["nagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => console.log(el.toUpperCase()))

console.log(heros)

const heorswithraj = heros.filter((h)=>{
    return h.endsWith('raj') //return keyword important
})

console.log(heorswithraj)

// heros.map((el) => console.log(el.toUpperCase())) SAME

const cartbil = [20,30,50]

const sumofcart = cartbil.reduce((prev, curr) => prev + curr, 0)
console.log(sumofcart)

const gamesc = [200, 300, 310, 100, 250, 150]
console.log(typeof gamesc[0])

console.log(gamesc)

const gamesccheck = gamesc.every((v) => typeof v === "number")

console.log("check: ", gamesccheck)

const above200 = gamesc.find((score) => score>200)
console.log("200above? ", above200)

//findindex, some, sort - some more methods