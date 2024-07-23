import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminForm = ({ newProduct, onInputChange, onAddProduct }) => {
  return (
    <div className="admin-form">
      <FormControl
        name="name"
        value={newProduct.name}
        onChange={onInputChange}
        placeholder="Yeni Ürün Adı"
      />
      <FormControl
        type="number"
        name="price"
        value={newProduct.price}
        onChange={onInputChange}
        placeholder="Yeni Ürün Fiyatı"
        className="number-input"
      />
      <FormControl
        name="image"
        value={newProduct.image}
        onChange={onInputChange}
        placeholder="Yeni Ürün Fotoğraf URL"
      />
      <Button onClick={onAddProduct} variant="primary">
        Ürün Ekle
      </Button>
    </div>
  );
};

export default AdminForm;