const http = require("http");
const url = require('url');

http.createServer((request, response) => {
    console.log("start server...");
    console.log(request.method);
    let urlReq = url.parse(request.url, true);
    console.log(urlReq.query.test_number_1);
    if (urlReq.query.test_number_1 === String){
        response.end(`you write `)
    }
    response.end("just another number ");
  })
  .listen(3001);
