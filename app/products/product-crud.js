const express = require('express');
const mongoose = require('mongoose');

const Product = require('../db/productdetails.js');

module.exports.getAllPriducts = async (req, res) => {
  try {
    const productlist = await Product.find();
    res.status(200).json(productlist);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const newProd = req.body;
    const newProduct = new Product({
      name: newProd.name,
      category: newProd.category,
      subcategory: newProd.subcategory,
      price: newProd.price,
      pid: newProd.pid,
    });

    await newProduct.save();
    res.status(200).json({ id: newProduct._id });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
