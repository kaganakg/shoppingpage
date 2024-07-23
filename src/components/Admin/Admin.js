import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import AdminTable from './AdminTable';
import AdminForm from './AdminForm';
import './Admin.css';

const Admin = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: '', price: '', image: '' });
  };

  const handleUpdateProduct = (id, field, value) => {
    const updatedProduct = products.find(product => product.id === id);
    updatedProduct[field] = value;
    updateProduct(updatedProduct);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="admin-container">
      <AdminTable 
        products={products}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      <AdminForm 
        newProduct={newProduct}
        onInputChange={handleInputChange}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Admin;