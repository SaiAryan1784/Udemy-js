const button = document.getElementById('btn')
const colortext = document.querySelector('.color')

const hexarr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
]

button.addEventListener('click', () => {
    const hexcolor = generatehex()
    document.body.style.backgroundColor = hexcolor;
    colortext.textContent = hexcolor;
})

const generatehex = () => {
    let hex = '#';

    for(let i = 0; i<6;i++){
        hex += hexarr[getrandindex()]
    }
    // alert(hex)
    return hex;
}

const getrandindex = () => {
    // console.log(hexn)
    return Math.floor(Math.random() * hexarr.length)
}