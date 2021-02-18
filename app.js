const http = require("http");
const url = require('url');

http.createServer((request, response) => {
    if (request.method == 'GET') {
        console.log("start server...");
        console.log(request.method);
        let urlReq = url.parse(request.url, true);
        console.log(urlReq.query.test);
        if (urlReq.query.test % 2 == 0) {
            response.end(`you right `);
        }
        response.end("just another number ");
    } else {
        //POST
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            response.end('all working');
        })
    }
})
    .listen(3001);
