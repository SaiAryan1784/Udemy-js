let random
let para = document.getElementById("result")
let winCount = 0
let loseCount = 0
let tieCount = 0
let win = document.getElementById("win")
let lose = document.getElementById("lose")
let tie = document.getElementById("tie")

function rock()
{
    random = Math.random()
    console.log(random)

    if(random<=1/3)
    {
        para.textContent = "Computer picks Rock, Tied"
        tieCount++
        tie.textContent = `Tie Count : ${tieCount}`
    }

    else if(random>1/3 && random<2/3)
    {
        para.textContent = "Computer picks Paper You Lost, heh"
        loseCount++
        lose.textContent = `Lose Count : ${loseCount}`
    }

    else if(random>2/3)
    {
        para.textContent = "Computer picks Scissors You Won, Gr8"
        winCount++
        win.textContent = `Win Count : ${winCount}`
    }
}

function paper()
{
    random = Math.random()
    console.log(random)

    if(random<=1/3)
    {
        para.textContent = "Computer picks Rock, You Won Gr8"
        winCount++
        win.textContent = `Win Count : ${winCount}`
    }

    else if(random>1/3 && random<2/3)
    {
        para.textContent = "Computer picks Paper, Tied"
        tieCount++
        tie.textContent = `Tie Count : ${tieCount}`
    }

    else if(random>2/3)
    {
        para.textContent = "Computer picks scissors, You lost HeH"
        loseCount++
        lose.textContent = `Lose Count : ${loseCount}`
    }
}

function scissors()
{
    random = Math.random()
    console.log(random)

    if(random<=1/3)
    {
        para.textContent = "Computer picks Rock, You Lost HeH"
        loseCount++
        lose.textContent = `Lose Count : ${loseCount}`
    }

    else if(random>1/3 && random<2/3)
    {
        para.textContent = "Computer picks Paper, You Won gr8"
        winCount++
        win.textContent = `Win Count : ${winCount}`
    }

    else if(random>2/3)
    {
        para.textContent = "Computer picks Scissors Tie"
        tieCount++
        tie.textContent = `Tie Count : ${tieCount}`
    }
}

function reset()
{
    winCount = 0
    loseCount = 0
    tieCount = 0

    lose.textContent = `Lose Count : ${loseCount}`
    tie.textContent = `Tie Count : ${tieCount}`
    win.textContent = `Win Count : ${winCount}`

    para.textContent = "Try Your luck"

}