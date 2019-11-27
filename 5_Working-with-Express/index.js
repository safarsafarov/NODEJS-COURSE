const express = require('express');

const app = express();

app.use((res, req, next) => {
 console.log('In the middleware');
 next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
 console.log('In another middlware!');
 res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);