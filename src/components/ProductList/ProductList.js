import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;