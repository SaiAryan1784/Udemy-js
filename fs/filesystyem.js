var fs = require('fs')

fs.readFile('note.txt', function(err, data) {
    if(err) {
        console.log('err: ', err)
    }
    console.log('Data: ', data.toString)
})