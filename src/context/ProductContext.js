import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const addProduct = (newProduct) => {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id, ...newProduct }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{
      products,
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      updateProduct,
      addProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};