import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ürün Adı</TableCell>
            <TableCell>Adet</TableCell>
            <TableCell>Fiyat</TableCell>
            <TableCell>Toplam</TableCell>
            <TableCell>Artır/Azalt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price} TL</TableCell>
              <TableCell>{item.price * item.quantity} TL</TableCell>
              <TableCell>
                <Button onClick={() => increaseQuantity(item)} variant="contained" color="primary">+</Button>
                <Button onClick={() => decreaseQuantity(item)} variant="contained" color="error">-</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h3 style={{ textAlign: 'right', margin: '20px' }}>Toplam Fiyat: {totalPrice} TL</h3>
    </TableContainer>
  );
};

export default Cart;