const myset = new Set();

myset.add(1);
myset.add(3);
myset.add(8);

myset.add(5);

myset.add("some text");

const o = {a:1 , b:2};
myset.add(o);// we can add object to a set too


console.log(myset);

let a  = myset.has(o);
let b = myset.has(5);

console.log(a);
console.log(b);