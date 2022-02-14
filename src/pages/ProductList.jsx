

import React, { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductService from '../serveces/productService';

export default  function ProductList() {
const[products, setProducts] = useState([]);
useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data),[])
})

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ürün Adı</th>
                        <th>Birim Fiyatı</th>
                        <th>Stok Adedi</th>
                        <th>Açıklama</th>
                        <th>Kategori</th>
                    </tr>
                </thead>
                <tbody>
                  {
                   products.map((product) =>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td><Link to={`/products/${product.id}`}>{product.productName}</Link></td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.category.categoryName}</td>
                    </tr>
                   ))
                }
                    
                </tbody>
            </Table>
        </div>
    )
}
