//promises 
// runtime env - simulated env js gets enhanced capabilities ...

// synchronous waits till the code completes step wise

// function timeconstask(){
//     for(let i=0;i<1000000000;i++){

//     }
// }

// console.log("start");
// timeconstask();
// console.log("start the timer");
// setTimeout(function exec(){
//     console.log("timer completed"); // --> this will be executed at last
// }, 0);
// console.log("timer ended");
// timeconstask();
// console.log("end");

function returndummmypromise () {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function f(){
            console.log("timer completed")
            resolve("done");
            reject("err");
        }, 10000);
    })
}

let p = returndummmypromise();

// consume a promise

// after promise is executed then task will move ahead
p
.then(function exec(val){
    console.log("promise resolved with value ",val);
})
.catch(function exec(err){
    console.log("error in catch of promise ",err);
})

console.log("end");