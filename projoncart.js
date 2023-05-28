let countCart=0;

function show()
{
    console.log(`Cart Quantity: ${countCart}`)
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
    console.log(`Cart Empty`)
}