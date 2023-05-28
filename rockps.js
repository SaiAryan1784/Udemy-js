let random
let para = document.getElementById("result")

function rock()
{
    random = Math.random()
    console.log(random)
    if(random==1/3 || random==2/3)
    para.textContent = "Pick again"

    else if(random<1/3)
    para.textContent = "Computer - Rock Tied"

    else if(random>1/3 && random<2/3)
    para.textContent = "Computer - Paper You Lost, heh"

    else if(random>2/3)
    para.textContent = "Computer - Scissors You Won, Gr8"
}

function paper()
{
    random = Math.random()
    console.log(random)
    if(random==1/3 || random==2/3)
    para.textContent = "Pick again"

    else if(random<1/3)
    para.textContent = "Computer picks Rock, You Won Gr8"

    else if(random>1/3 && random<2/3)
    para.textContent = "Computer picks Paper, Tied"

    else if(random>2/3)
    para.textContent = "Computer picks scissors, You lost HeH"
}

function scissors()
{
    random = Math.random()
    console.log(random)
    if(random==1/3 || random==2/3)
    para.textContent = "Pick again"

    else if(random<1/3)
    para.textContent = "Computer picks Rock, You Lost HeH"

    else if(random>1/3 && random<2/3)
    para.textContent = "Computer picks Paper, You Won gr8"

    else if(random>2/3)
    para.textContent = "Computer picks Scissors Tie"
}