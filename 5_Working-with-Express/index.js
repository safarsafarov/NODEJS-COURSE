const http = require('http');
const express = require('express');

const app = express();

app.use((res, req, next) => {
 console.log('In the middleware');
 next();
});

app.use((req, res, next) => {
 console.log('In another middlware!');
 res.send();
});

const server = http.createServer(app);

server.listen(3000);

