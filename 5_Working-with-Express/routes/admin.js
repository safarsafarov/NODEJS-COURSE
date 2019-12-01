const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-product', (req, res, next) => {
 res.send('<form action="/admin/product> method="POST"><input type="text" name="title<button type="submit">"');
});

// /admin/add=product => POST
router.post('/admin/product', (req, res, next) => {
 console.log(req.body);
 res.redirect('/');
});

module.exports = router;