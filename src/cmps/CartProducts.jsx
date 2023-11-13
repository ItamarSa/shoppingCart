// CartProducts.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductPreview } from './ProductPreview';
import { utilService } from '../services/util.service';
import { ProductList } from './ProductList';
import { removeFromCart } from '../store/action/product.action';
import { showSuccessMsg } from '../services/event-bus.service';

export function CartProducts() {
    
  // Get the products from the Redux store's cart
  const cartProducts = useSelector((state) => state.productModule.cart);
  console.log('cartProducts:', cartProducts)

  async function onRemoveFromCart(productId) {
    console.log('productId:', productId)
    removeFromCart(productId)
    showSuccessMsg('remove to Cart')
}

  return (
    <div className="cart-products">
      <h2>Cart Products</h2>
      <ProductList products={cartProducts} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}
