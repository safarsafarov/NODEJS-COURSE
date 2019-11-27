const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In another middlware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);