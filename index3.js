const http = require('http');

const PORT = 3011;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    if ( req.url === '/'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({"person":"Sai"}))
    } else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain")
        res.end("About Page!");
    } else{
        res.statusCode = 500;
        res.setHeader
    }
})

server.listen(PORT, () => {
    console.log(`Server running at ${hostname}:${PORT}`);
})