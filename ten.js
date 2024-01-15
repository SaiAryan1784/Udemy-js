function isprime(x){
    try {
        // console.lo("starting");
        for(let i=0;i<=x-1;i++){
            if(x%i==0)
            throw new Error("not divisble")
        }
        return "prime";
    } catch (err) {
        console.log( err); // shows error
    }
}

isprime(10); // only runtime exceptions works in try and catch