let lang = ["eng", "hin", "jap"];
console.log(lang.length);

let arr = ["hello", 20, true];
console.log(arr)

let emptyarray = new Array(5)// new is the constructor

console.log(emptyarray);

let player = [];
player[2]="virat";

console.log(player)
console.log(player[2]);

const iArr = [1,2,4,5];
delete iArr[2];
console.log(iArr);
console.log(iArr.length);

for(const i of iArr)
{
    console.log(`value is ${i}`);
}
