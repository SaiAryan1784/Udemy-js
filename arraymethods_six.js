let fruits = ['Apple', 'Banana', 'Cherry'];

let last = fruits.pop()
console.log(last);
console.log(fruits);
fruits.push('mango');
console.log(fruits);

let first = fruits.shift();// CPU intensive method -- not recommended
console.log(fruits);

fruits.unshift("Apple");//CPU intensive
console.log(fruits);


let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = arr1.concat(arr2);
console.log(arr3)

const result = fruits.join("");
console.log(result);

let n = ['S','A','I'];
const namefinal = n.join("");//prints SAI as string separator is "" otherwise wud have printed S,A,I

console.log(namefinal);

let fruits1  = ['Apple', 'Banana', 'Orange', 'Cherry']
let citrus = fruits1.slice(2);// we can also give end number but if the end number is last element ->
// -> we can leave it out

console.log(citrus)

const nestArr = [1,2,3,[4,5,[7,8]]]
const flatarr = nestArr.flat();// 1,2,3,4,5[7,8]... ans
const flatArrlv1 = nestArr.flat(2)// 1,2,3,4,5,7,8;... flats out next arr on both levels

console.log(flatarr);
console.log(flatArrlv1);