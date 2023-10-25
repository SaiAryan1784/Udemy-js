// const user = {
//     name:"sai",
//     org:"abes",
//     city:"noida",
//     age:"19"
// }

// console.log(user)
// console.log(user.age)

// const user = new Object()
// user.id = 101
// user.name = "Sai",
// user.city = "Noida";

// function Emp(id, name, salary){
//     this.id = id;
//     (this.name = name), (this.salary = salary)
// }

// const emp = new Emp(101, "Sai", 0);

// console.log(emp.id+" "+emp.name+" "+emp.salary);

const emp = {
    id: 101,
    name:"Sai",
    salary:700
};

// console.log(emp.id)

// console.log(emo["name"])

emp.name = null

console.log(emp)

delete emp.name; // name is deleted

console.log(emp)

for(const key in emp)
{
    // console.log(emp[key]);
    console.log(`${key} : ${emp[key]}`)
}

var keys = Object.keys(emp);
console.log(keys)

var data = Object.values(emp);
console.log(data)

const newObject = Object.assign({}, emp);

console.log(newObject)

for(const key in emp)
{
    // console.log(emp[key]);
    console.log(`${key} : ${emp[key]}`)
}