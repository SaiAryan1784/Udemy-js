//HOF higher order functions - a function that returns a function or takes function as a parameter (like a variable)

// First Class function
const powerTwo = (n) => {
    return n**2;
}
// powerTwo(2);
// console.log(3);

const powerCube = (powerTwo, n) => {
    return powerTwo(n)*n;
}

console.log(powerCube(powerTwo, 2));

function hello(){
    return () => {
        console.log("Hello")
    }
}

let guessValue = hello()
console.log(guessValue)

const higherOrder = n => {
    const oneFunc = m => {
        const twoFunc = p => {
            return n+m+p;
        }
        return twoFunc
    }
    return oneFunc
}
console.log(higherOrder(2)(3)(4))

const myNums = [2,3,4,5]

const sumArr = arr => {
    let total = 0
    arr.forEach(function(element){
        total+=element
    })
    return total
}

console.log(sumArr(myNums))

function onemorehello(){
    console.log("Hello", Math.random());
}

// setInterval(onemorehello, 1000)
setTimeout(onemorehello, 2000);