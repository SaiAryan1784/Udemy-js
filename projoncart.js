let countCart=0;
let count = document.getElementById("Showresult")

function show()
{
    count.textContent = `Cart item: ${countCart}`
}

function add()
{
    countCart++
    console.log(`Updated`)
}

function add2()
{
    countCart+=2
    console.log(`Updated`)
}

function add3()
{
    countCart+=3
    console.log(`Updated`)
}

function reset()
{
    countCart=0
    count.textContent = `Cart item: ${countCart}`
}