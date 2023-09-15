// const user = {
//     name:"sai",
//     org:"abes",
//     city:"noida",
//     age:"19"
// }

// console.log(user)
// console.log(user.age)

const user = new Object()
user.id = 101
user.name = "Sai",
user.city = "Noida";

function Emp(id, name, salary){
    this.id = id;
    (this.name = name), (this.salary = salary)
}

const emp = new Emp(101, "Sai", 0);

console.log(emp.id+" "+emp.name+" "+emp.salary);