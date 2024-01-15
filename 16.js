// OOPS 

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`hello my name is ${this.name} and i am ${this.age} years old`)
    }
}

const sai = new Person('Sai', 19);
sai.greet()