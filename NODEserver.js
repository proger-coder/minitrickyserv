const http = require('http')
const hostname = '127.0.0.1' //для Хероку не использовать, а для локалхоста можно
const port = process.env.PORT||8080

const OBJ = {
    name:"Ayrat",
    age:31,
    status:"Heroku responding"
}
const server = http.createServer((req, res) => {
    res.statusCode = 200
    //--- это кусочек, чтобы выдавало надпись на страничке:------------
        //res.setHeader('Content-Type', 'text/plain')
        //res.end('Hello World\n')

   // ----это CORS!!!! и он позволяет запросы от HTML с локалхоста  !!!!!!!!----------------------------
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //--------это заголовки для нормальных JSON-ответов через Fetch-------------
    res.setHeader('Content-Type', 'application/json'); // ДЖСОН-овские СРРЕДЫ
    res.end(JSON.stringify(OBJ));                      // ДЖСОН-овские СРРЕДЫ
})


    //-----версия для ХЕРОКУ------------
server.listen(port);


/*
    //---версия для ЛОКАЛХОСТА---запустить в браузере http://127.0.0.1:8080---------------

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

*/