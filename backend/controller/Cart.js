const Cart = require("../models/Cart");

exports.postToCart =  async (req,res)=>{
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId });
    }
    
    const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Error adding product to cart' });
  }
}