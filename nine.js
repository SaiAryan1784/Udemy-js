// error handling 
// function isEven(x){
//     if(x%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// isEven(10);

// try and catch

function iseven(x) {
    try {
            if(x%2==0){
            console.log("even");
            }
        else{
            console.lo("odd");
        }
        console.log("ending");
    } catch {
        console.log("handled");
    } finally {
        console.log("finally");
    }
}

iseven(11); // error will return only handled
