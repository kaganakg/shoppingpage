import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Ürününüz sepete eklenmiştir!', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} TL</p>
      <button onClick={handleAddToCart}>Sepete Ekle</button>
    </div>
  );
};

export default ProductCard;