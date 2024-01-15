// destructuring 
// array

// let nums= [10,20,30];

// const [a,b,c] = nums

// console.log(a,b,c); // prints 10,20,30

let [firstname, lastname] = 'Raj Kapoor'.split(" ");

console.log(firstname,lastname);

let nums = [10,true,30,'hello',40];

let [a,,c,,e] = nums

console.log(a,c,e);

let user = {};
[user.firstname, user.lastname] = "Sai Aryan".split(" ");

console.log(user);