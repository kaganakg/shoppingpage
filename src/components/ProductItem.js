import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} TL</p>
      <button onClick={() => addToCart(product)}>Sepete Ekle</button>
    </div>
  );
};

export default ProductItem;