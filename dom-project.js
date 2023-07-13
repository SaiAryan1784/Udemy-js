const sub = document.getElementById("Subscribe")

const sub2 = document.querySelector(".Subscribe")

function subbutton(){
    if(sub.innerHTML === "Subscribe")
    {
        sub.innerHTML="Subscribed"
    }
    else
    {
        sub.innerHTML="Subscribe"
    }
}

const total = document.getElementById("total")

function calculate(){
    let input = document.getElementById("userInput").value
    console.log(input)
    input = parseInt(input)
    if(input<=40){
        input += 10;
    }
    
    total.innerHTML = `Price to pay at the time of delivery = $${input}`;
}