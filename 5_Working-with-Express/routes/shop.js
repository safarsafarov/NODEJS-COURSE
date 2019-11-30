const express = require('express');
const router = express.router();

router.use('/', (req, res, next) => {
 res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;