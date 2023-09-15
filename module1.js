var modulevar = 12;

function moduleFunc(){
    console.log("I am a module function");
}

console.log("hello world");

module.exports = {moduleFunc, modulevar}