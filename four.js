// function greetme(){
//     console.log("hello")
// }

// greetme();

function greetme(username, age){
    console.log(`hello ${username} of age ${age}`)
}

greetme(`Sai`, 19);
greetme(`IDK`, 23);

var arr = [1,2,3,4,5]

function addArray(arr){
    let result = 0;

    for(let index=0;index<arr.length;index++){
        result += arr[index];
    }
    return result;
}

const result = addArray(arr);
console.log(result);


const addtwo = (x,y) => x+y

const result1 = addtwo(3,2);
console.log(result1)

const User = {
    username: "John",
    greet: function(){
        console.log(`Hello ${this.username}`);
    },
    greetTwo: () => {
        console.log(`Hello ${this.username}`)
    }
}

User.greet()
User.greetTwo()

function regularfunc(name){
    this.name = name
}

const regularobj = new regularfunc("John")
console.log(regularobj.name);

//bind call apply - not usable anymore...

function test(arg1, arg2){
    console.log(this.num, arg1, arg2);
}

test.call({num: 8}, 3, 4);

function testtwo(...argments){
    console.log(this.num,arguments);
}

testtwo({num: 2},1,2,3,4,5);

testtwo.apply({num: 3},[1,2,3,4])// apply only works if u have provided array type of arguments ..

