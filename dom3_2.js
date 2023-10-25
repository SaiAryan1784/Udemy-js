const button = document.getElementById('mybtn')

function handleClick () {
    alert('clicked')
}

// button.addEventListener('click', handleClick, {capture: true}) 

// runs once
// button.addEventListener('click', handleClick, {once: true})  

button.addEventListener('click', handleClick)


//remove listener after 3 seconds {imp to avoid memory leak}

setTimeout(function(){
    button.removeEventListener('click', handleClick)
    console.log('event listener removed')
}, 3000)

// bubbling and capturing 