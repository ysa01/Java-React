

import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductService from '../serveces/productService';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';
export default function ProductList() {
    const dispatch = useDispatch()
  
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} sepete eklendi!`)
    }
// function handleAddToCart(product) {
//     dispatch(addToCart(product))
// }
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><Link to={"/products/" + product.id}>{product.productName}</Link></td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.category.categoryName}</td>
                                <td><Button onClick={()=>handleAddToCart(product)}>SepeteAt</Button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}
