const express = require('express');

const router = express.Router();
const productCrud = require('../products/product-crud.js');

router.get('/list', productCrud.getAllPriducts);
router.post('/add', productCrud.addProduct);

module.exports = router;
