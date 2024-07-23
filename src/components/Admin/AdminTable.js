import React from 'react';
import { Table, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminTable = ({ products, onUpdateProduct, onDeleteProduct }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Fiyat</th>
          <th>Fotoğraf URL</th>
          <th>Güncelle</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>
              <FormControl
                value={product.name}
                onChange={(e) => onUpdateProduct(product.id, 'name', e.target.value)}
                placeholder="Ürün Adı"
              />
            </td>
            <td>
              <FormControl
                type="number"
                value={product.price}
                onChange={(e) => onUpdateProduct(product.id, 'price', e.target.value)}
                placeholder="Fiyat"
                className="number-input"
              />
            </td>
            <td>
              <FormControl
                value={product.image}
                onChange={(e) => onUpdateProduct(product.id, 'image', e.target.value)}
                placeholder="Fotoğraf URL"
              />
            </td>
            <td>
              <Button onClick={() => onDeleteProduct(product.id)} variant="danger">
                Sil
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTable;