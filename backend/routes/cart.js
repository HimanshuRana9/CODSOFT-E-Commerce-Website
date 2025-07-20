
const express = require('express');
const router = express.Router();
let userCart = [];

router.get('/', (req, res) => res.json(userCart));

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  const existing = userCart.find((item) => item.productId === productId);
  if (existing) existing.quantity += quantity;
  else userCart.push({ productId, quantity });
  res.status(201).json(userCart);
});

router.delete('/:productId', (req, res) => {
  userCart = userCart.filter((item) => item.productId !== req.params.productId);
  res.json(userCart);
});

router.put('/:productId', (req, res) => {
  const item = userCart.find((item) => item.productId === req.params.productId);
  if (item) {
    item.quantity = req.body.quantity;
    res.json(userCart);
  } else res.status(404).json({ message: 'Item not found in cart' });
});

module.exports = router;
